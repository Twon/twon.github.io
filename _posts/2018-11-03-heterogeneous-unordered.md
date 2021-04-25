---
toc: true
layout: single
classes: wide
---
# Heterogeneous Comparison Lookup For Associative & Unordered Containers C++

Starting with C++14 n3421: Making Operator Functors greater<> lay the foundation for fixing this issue in associative containers by addressing this issue in the underlying functor objects used by the STL containers.  This paper highlighted two issues with functor syntax, the first is the need to explicitly specify argument types, for instance, consider sorting a vector with explicitly declared functors:

```
std::vector<int32_t> v = /* ... */;  
sort(v.begin(), v.end(), greater<int32_t>());
```

This works fine until the type of the vector is changed to store 64-bit integers.

```
std::vector<int64_t> v = /* ... */;  
sort(v.begin(), v.end(), greater<int32_t>()); // Explicit truncation of integers from 64-bit to 32-bit
```

Now after changing the size of integers stored in the vector you have truncation occurring in the sorting.  It’s true that your compiler should warn you about this, but given the type for the sort can be deduced this should be the default, only being specified when we want to manually overload the sorting intentionally.  With this change we can write the simpler:

```
std::vector<int64_t> v = /* ... */;  
sort(v.begin(), v.end(), greater<>()); // Syntax to deduce type for the greater functor
```

Next, we have the issue of only homogeneous types being allowed with functors.  Consider what happens when we want to use a mix of types, perhaps using std::multiply with Watts and Seconds unit types, to return a Joules unit type.  This was completely incompatible with the pre-C++14 style functor:

```
template <class T>  
struct multiplies<T> {  
    T operator()(T& lhs, T& rhs) const  
    {  
        return lhs*rhs;  
    }  
};
```

Now thanks to the magic of C++14 this functor supports heterogeneous types, and through the magic of universal references and perfect forwarding can select between L-value and R-Value reference types:

```
template <void> struct multiplies {  
    template <typename T, typename U>  
    auto operator()(T&& t, U&& u) const -> decltype(std::forward(t) * std::forward(u));
    {
        return std::forward(t) * std::forward(u);
    }
};
```

## Heterogeneous Comparison Lookup For Associative Containers

Next, it was the job of N3657: Adding heterogeneous comparison lookup to associative containers to propose extensions to set, map, multiset and multimap to allow for comparison of heterogeneous types.  This extends the syntax of the previous paper to the declaration of associative containers, thus the following:

```
std::set<std::string, std::less<>> s = /* ... */;  
s.find("key"); // No temporary std::string is create, comparison works against a char*
```

Instructs the compiler to figure out the type for the comparison operations.  One point to note is it was a deliberate decision to introduce a new syntax to exploit this feature, in part because of the restriction for changes to the language not to introduce behavior breaking changes.  Thus if you want to leverage this feature when using containers you must specify this syntax to instruct the compiler to auto deduce the correct type for comparisons.

## Heterogeneous Comparison Lookup For Unordered Containers

Finally [p0919r0: Heterogeneous lookup for unordered containers](http://www.open-std.org/jtc1/sc22/wg21/docs/papers/2018/p0919r0.html) has just been proposed for introduction into the C++20 standard.  This provides the same functional change but applied to unordered_set, unordered_map, unordered_multiset and unordered_multimap.  This paper is yet to be voted on by the standards committee but likely to be accepted before the C++20 standard is finalised based on it being a natural improvement to unordered containers.

```
template<typename Key, typename Value>  
using h_str_umap = std::unordered_map<Key, Value, string_hash, std::equal_to<>>;  
h_str_umap<std::string, int> map = /* ... */;  
map.find("This does not create a temporary std::string object ;)"sv);
```

## Conclusion

These are nice improvements to finally be getting added into the language and address a well-known performance constraint with these containers when using certain types, in particular strings where ever the use of the string literal operator to explicitly specify the correct type did not actually address the issue of creating an unnecessary temporary object.  However, because this feature is not the default care must be taken when declaring your types to ensure defaulting of the type deduction for the functor object.  Additionally, this is a relatively subtle issue so may well go largely unnoticed until the knowledge of this solution becomes more widespread.