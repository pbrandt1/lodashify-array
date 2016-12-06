require('../index')
var assert = require('assert')
var eql = assert.deepEqual

describe('array methods', function () {
  it('should pass all the examples on the lodash documentation site', function () {
    var r

    r = ['a', 'b', 'c', 'd']._chunk(2);
    eql(r, [['a', 'b'], ['c', 'd']])

    r = ['a', 'b', 'c', 'd']._chunk(3);
    eql(r, [['a', 'b', 'c'], ['d']])



    r = [0, 1, false, 2, '', 3]._compact();
    eql(r, [1, 2, 3])



    var array = [1];
    r = array._concat(2, [3], [[4]]);

    eql(r, [1, 2, 3, [4]])


    r = [2, 1]._difference([2, 3]);
    eql(r, [1])

    return



    var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];

    // r = objects._differenceWith([{ 'x': 1, 'y': 2 }], _.isEqual);
    // eql(r, [{ 'x': 2, 'y': 1 }])



    r = [1, 2, 3]._drop();
    eql(r, [2, 3])

    r = [1, 2, 3]._drop(2);
    eql(r, [3])

    r = [1, 2, 3]._drop(5);
    eql(r, [])

    r = [1, 2, 3]._drop(0);
    eql(r, [1, 2, 3])



    r = [1, 2, 3]._dropRight();
    eql(r, [1, 2])

    r = [1, 2, 3]._dropRight(2);
    eql(r, [1])

    r = [1, 2, 3]._dropRight(5);
    eql(r, [])

    r = [1, 2, 3]._dropRight(0);
    eql(r, [1, 2, 3])



    var array = [1, 2, 3];

    r = array._fill('a');
    console.log(array);
    eql(r, ['a', 'a', 'a'])

    r = Array(3)._fill(2);
    eql(r, [2, 2, 2])

    r = [4, 6, 8, 10]._fill('*', 1, 3);
    eql(r, [4, '*', '*', 10])



    r = [1, [2, [3, [4]], 5]]._flatten();
    eql(r, [1, 2, [3, [4]], 5])



    r = [1, [2, [3, [4]], 5]]._flattenDeep();
    eql(r, [1, 2, 3, 4, 5])



    var array = [1, [2, [3, [4]], 5]];

    r = array._flattenDepth(1);
    eql(r, [1, 2, [3, [4]], 5])

    r = array._flattenDepth(2);
    eql(r, [1, 2, 3, [4], 5])



    r = [['a', 1], ['b', 2]]._fromPairs();
    eql(r, { 'a': 1, 'b': 2 })



    r = [1, 2, 3]._head();
    eql(r, 1)

    r = []._head();
    eql(r, undefined)



    r = [1, 2, 3]._initial();
    eql(r, [1, 2])



    r = [2, 1]._intersection([2, 3]);
    eql(r, [2])



    var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
    var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];

    // r = objects._intersectionWith(others, r = ._isEqual);
    // eql(r, [{ 'x': 1, 'y': 2 }])



    r = ['a', 'b', 'c']._join('~');
    eql(r, 'a~b~c')



    r = [1, 2, 3]._last();
    eql(r, 3)



    var array = ['a', 'b', 'c', 'd'];

    r = array._nth(1);
    eql(r, 'b')

    r = array._nth(-2);
    eql(r, 'c')



    var array = ['a', 'b', 'c', 'a', 'b', 'c'];

    r = array._pull('a', 'c');
    eql(array, ['b', 'b'])



    var array = ['a', 'b', 'c', 'a', 'b', 'c'];

    r = array._pullAll(['a', 'c']);
    eql(array, ['b', 'b'])



    var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];

    r = array._pullAllBy([{ 'x': 1 }, { 'x': 3 }], 'x');
    eql(array, [{ 'x': 2 }])



    var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];

    // r = array._pullAllWith([{ 'x': 3, 'y': 4 }], r = ._isEqual);
    // eql(array, [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }])



    var array = ['a', 'b', 'c', 'd'];
    r = array._pullAt([1, 3]);
    eql(array, ['a', 'c'])
    eql(r, ['b', 'd'])



    var array = [1, 2, 3, 4];
    r = array._remove(function(n) {
      return n % 2 == 0;
    });
    eql(array, [1, 3])
    eql(r, [2, 4])



    var array = [1, 2, 3];

    r = array._reverse();
    eql(r, [3, 2, 1])
    eql(array, [3, 2, 1])



    r = [30, 50]._sortedIndex(40);
    eql(r, 1)



    r = [4, 5, 5, 5, 6]._sortedIndexOf(5);
    eql(r, 1)



    r = [4, 5, 5, 5, 6]._sortedLastIndex(5);
    eql(r, 4)



    r = [4, 5, 5, 5, 6]._sortedLastIndexOf(5);
    eql(r, 3)



    r = [1, 1, 2]._sortedUniq();
    eql(r, [1, 2])



    r = [1.1, 1.2, 2.3, 2.4]._sortedUniqBy(Math.floor);
    eql(r, [1.1, 2.3])



    r = [1, 2, 3]._tail();
    eql(r, [2, 3])



    r = [1, 2, 3]._take();
    eql(r, [1])

    r = [1, 2, 3]._take(2);
    eql(r, [1, 2])

    r = [1, 2, 3]._take(5);
    eql(r, [1, 2, 3])

    r = [1, 2, 3]._take(0);
    eql(r, [])



    r = [1, 2, 3]._takeRight();
    eql(r, [3])

    r = [1, 2, 3]._takeRight(2);
    eql(r, [2, 3])

    r = [1, 2, 3]._takeRight(5);
    eql(r, [1, 2, 3])

    r = [1, 2, 3]._takeRight(0);
    eql(r, [])



    r = [2]._union([1, 2]);
    eql(r, [2, 1])



    // hit some collection methods
    var users = [
      { 'user': 'barney',  'age': 36, 'active': true },
      { 'user': 'fred',    'age': 40, 'active': false },
      { 'user': 'pebbles', 'age': 1,  'active': true }
    ];

    r = users._find(function(o) { return o.age < 40; });
    eql(r, { 'user': 'barney',  'age': 36, 'active': true })

    // The `_.matches` iteratee shorthand.
    r = users._find({ 'age': 1, 'active': true });
    eql(r, { 'user': 'pebbles', 'age': 1,  'active': true })

    // The `_.matchesProperty` iteratee shorthand.
    r = users._find(['active', false]);
    eql(r, { 'user': 'fred',    'age': 40, 'active': false })

    // The `_.property` iteratee shorthand.
    r = users._find('active');
    eql(r, { 'user': 'barney',  'age': 36, 'active': true })


    //
    //
    // var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
    // var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
    //
    // r = ._unionWith(objects, others, r = ._isEqual);
    // eql(r, [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }])
    //
    //
    //
    // r = ._uniq([2, 1, 2]);
    // eql(r, [2, 1])
    //
    //
    //
    // var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }];
    //
    // r = ._uniqWith(objects, r = ._isEqual);
    // eql(r, [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }])
    //
    //
    //
    // var zipped = r = ._zip(['a', 'b'], [1, 2], [true, false]);
    // eql(r, [['a', 1, true], ['b', 2, false]])
    //
    // r = ._unzip(zipped);
    // eql(r, [['a', 'b'], [1, 2], [true, false]])
    //
    //
    //
    // var zipped = r = ._zip([1, 2], [10, 20], [100, 200]);
    // eql(r, [[1, 10, 100], [2, 20, 200]])
    //
    // r = ._unzipWith(zipped, r = ._add);
    // eql(r, [3, 30, 300])
    //
    //
    //
    // r = ._without([2, 1, 2, 3], 1, 2);
    // eql(r, [3])
    //
    //
    //
    // r = ._xor([2, 1], [2, 3]);
    // eql(r, [1, 3])
    //
    //
    //
    // var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
    // var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
    //
    // r = ._xorWith(objects, others, r = ._isEqual);
    // eql(r, [{ 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }])
    //
    //
    //
    // r = ._zip(['a', 'b'], [1, 2], [true, false]);
    // eql(r, [['a', 1, true], ['b', 2, false]])
    //
    //
    //
    // r = ._zipObject(['a', 'b'], [1, 2]);
    // eql(r, { 'a': 1, 'b': 2 })
    //
    //
    //
    // r = ._zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2]);
    // eql(r, { 'a': { 'b': [{ 'c': 1 }, { 'd': 2 }] } })
    //
    //
    //
    // r = ._zipWith([1, 2], [10, 20], [100, 200], function(a, b, c) {
    //   return a + b + c;
    // });
    // eql(r, [111, 222])
    //
    //
    //
    // r = ._findLast([1, 2, 3, 4], function(n) {
    //   return n % 2 == 1;
    // });
    // eql(r, 3)
    //
    //
    //
    // function duplicate(n) {
    //   return [n, n];
    // }
    //
    // r = ._flatMap([1, 2], duplicate);
    // eql(r, [1, 1, 2, 2])
    //
    //
    //
    // function duplicate(n) {
    //   return [[[n, n]]];
    // }
    //
    // r = ._flatMapDeep([1, 2], duplicate);
    // eql(r, [1, 1, 2, 2])
    //
    //
    //
    // function duplicate(n) {
    //   return [[[n, n]]];
    // }
    //
    // r = ._flatMapDepth([1, 2], duplicate, 2);
    // eql(r, [[1, 1], [2, 2]])
    //
    //
    //
    // r = ._includes([1, 2, 3], 1);
    // eql(r, true)
    //
    // r = ._includes([1, 2, 3], 1, 2);
    // eql(r, false)
    //
    // r = ._includes({ 'a': 1, 'b': 2 }, 1);
    // eql(r, true)
    //
    // r = ._includes('abcd', 'bc');
    // eql(r, true)
    //
    //
    //
    // r = ._invokeMap([[5, 1, 7], [3, 2, 1]], 'sort');
    // eql(r, [[1, 5, 7], [1, 2, 3]])
    //
    // r = ._invokeMap([123, 456], String.prototype.split, '');
    // eql(r, [['1', '2', '3'], ['4', '5', '6']])
    //
    //
    //
    // var array = [
    //   { 'dir': 'left', 'code': 97 },
    //   { 'dir': 'right', 'code': 100 }
    // ];
    //
    // r = ._keyBy(array, function(o) {
    //   return String.fromCharCode(o.code);
    // });
    // eql(r, { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } })
    //
    // r = ._keyBy(array, 'dir');
    // eql(r, { 'left': { 'dir': 'left', 'code': 97 }, 'right': { 'dir': 'right', 'code': 100 } })
    //
    //
    //
    // r = ._reduce([1, 2], function(sum, n) {
    //   return sum + n;
    // }, 0);
    // eql(r, 3)
    //
    // r = ._reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
    //   (result[value] || (result[value] = [])).push(key);
    //   return result;
    // }, {});
    // eql(r, { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed))
    //
    //
    //
    // var array = [[0, 1], [2, 3], [4, 5]];
    //
    // r = ._reduceRight(array, function(flattened, other) {
    //   return flattened.concat(other);
    // }, []);
    // eql(r, [4, 5, 2, 3, 0, 1])
    //
    //
    //
    // r = ._sample([1, 2, 3, 4]);
    // eql(r, 2)
    //
    //
    //
    // r = ._sampleSize([1, 2, 3], 2);
    // eql(r, [3, 1])
    //
    // r = ._sampleSize([1, 2, 3], 4);
    // eql(r, [2, 3, 1])
    //
    //
    //
    // r = ._shuffle([1, 2, 3, 4]);
    // eql(r, [4, 1, 3, 2])
    //
    //
    //
    // r = ._size([1, 2, 3]);
    // eql(r, 3)
    //
    // r = ._size({ 'a': 1, 'b': 2 });
    // eql(r, 2)
    //
    // r = ._size('pebbles');
    // eql(r, 7)
    //
    //
    //
    // var users = [
    //   { 'user': 'fred',   'age': 48 },
    //   { 'user': 'barney', 'age': 36 },
    //   { 'user': 'fred',   'age': 40 },
    //   { 'user': 'barney', 'age': 34 }
    // ];
    //
    // r = ._sortBy(users, [function(o) { return o.user; }]);
    // eql(r, objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]])
    //
    // r = ._sortBy(users, ['user', 'age']);
    // eql(r, objects for [['barney', 34], ['barney', 36], ['fred', 40], ['fred', 48]])
    //
    //
    //
    // r = ._defer(function(stamp) {
    //   console.log(r = ._now() - stamp);
    // }, r = ._now());
    // eql(r, Logs the number of milliseconds it took for the deferred invocation.)
    //
    //
    //
    // var saves = ['profile', 'settings'];
    //
    // var done = r = ._after(saves.length, function() {
    //   console.log('done saving!');
    // });
    //
    // r = ._forEach(saves, function(type) {
    //   asyncSave({ 'type': type, 'complete': done });
    // });
    // eql(r, Logs 'done saving!' after the two async saves have completed.)
    //
    //
    //
    // r = ._map(['6', '8', '10'], r = ._ary(parseInt, 1));
    // eql(r, [6, 8, 10])
    //
    //
    //
    // jQuery(element).on('click', r = ._before(5, addContactToList));
    // eql(r, Allows adding up to 4 contacts to the list.)
    //
    //
    //
    // function greet(greeting, punctuation) {
    //   return greeting + ' ' + this.user + punctuation;
    // }
    //
    // var object = { 'user': 'fred' };
    //
    // var bound = r = ._bind(greet, object, 'hi');
    // bound('!');
    // eql(r, 'hi fred!')
    //
    // // Bound with placeholders.
    // var bound = r = ._bind(greet, object, r = ._ '!');
    // bound('hi');
    // eql(r, 'hi fred!')
    //
    //
    //
    // var object = {
    //   'user': 'fred',
    //   'greet': function(greeting, punctuation) {
    //     return greeting + ' ' + this.user + punctuation;
    //   }
    // };
    //
    // var bound = r = ._bindKey(object, 'greet', 'hi');
    // bound('!');
    // eql(r, 'hi fred!')
    //
    // object.greet = function(greeting, punctuation) {
    //   return greeting + 'ya ' + this.user + punctuation;
    // };
    //
    // bound('!');
    // eql(r, 'hiya fred!')
    //
    // // Bound with placeholders.
    // var bound = r = ._bindKey(object, 'greet', r = ._ '!');
    // bound('hi');
    // eql(r, 'hiya fred!')
    //
    //
    //
    // var abc = function(a, b, c) {
    //   return [a, b, c];
    // };
    //
    // var curried = r = ._curry(abc);
    //
    // curried(1)(2)(3);
    // eql(r, [1, 2, 3])
    //
    // curried(1, 2)(3);
    // eql(r, [1, 2, 3])
    //
    // curried(1, 2, 3);
    // eql(r, [1, 2, 3])
    //
    // // Curried with placeholders.
    // curried(1)(r = ._ 3)(2);
    // eql(r, [1, 2, 3])
    //
    //
    //
    // var abc = function(a, b, c) {
    //   return [a, b, c];
    // };
    //
    // var curried = r = ._curryRight(abc);
    //
    // curried(3)(2)(1);
    // eql(r, [1, 2, 3])
    //
    // curried(2, 3)(1);
    // eql(r, [1, 2, 3])
    //
    // curried(1, 2, 3);
    // eql(r, [1, 2, 3])
    //
    // // Curried with placeholders.
    // curried(3)(1, r = ._(2);
    // eql(r, [1, 2, 3])
    //
    //
    //
    // r = ._defer(function(text) {
    //   console.log(text);
    // }, 'deferred');
    // eql(r, Logs 'deferred' after one millisecond.)
    //
    //
    //
    // r = ._delay(function(text) {
    //   console.log(text);
    // }, 1000, 'later');
    // eql(r, Logs 'later' after one second.)
    //
    //
    //
    // var flipped = r = ._flip(function() {
    //   return r = ._toArray(arguments);
    // });
    //
    // flipped('a', 'b', 'c', 'd');
    // eql(r, ['d', 'c', 'b', 'a'])
    //
    //
    //
    // function isEven(n) {
    //   return n % 2 == 0;
    // }
    //
    // r = ._filter([1, 2, 3, 4, 5, 6], r = ._negate(isEven));
    // eql(r, [1, 3, 5])
    //
    //
    //
    // function doubled(n) {
    //   return n * 2;
    // }
    //
    // function square(n) {
    //   return n * n;
    // }
    //
    // var func = r = ._overArgs(function(x, y) {
    //   return [x, y];
    // }, [square, doubled]);
    //
    // func(9, 3);
    // eql(r, [81, 6])
    //
    // func(10, 5);
    // eql(r, [100, 10])
    //
    //
    //
    // function greet(greeting, name) {
    //   return greeting + ' ' + name;
    // }
    //
    // var sayHelloTo = r = ._partial(greet, 'hello');
    // sayHelloTo('fred');
    // eql(r, 'hello fred')
    //
    // // Partially applied with placeholders.
    // var greetFred = r = ._partial(greet, r = ._ 'fred');
    // greetFred('hi');
    // eql(r, 'hi fred')
    //
    //
    //
    // function greet(greeting, name) {
    //   return greeting + ' ' + name;
    // }
    //
    // var greetFred = r = ._partialRight(greet, 'fred');
    // greetFred('hi');
    // eql(r, 'hi fred')
    //
    // // Partially applied with placeholders.
    // var sayHelloTo = r = ._partialRight(greet, 'hello', r = ._;
    // sayHelloTo('fred');
    // eql(r, 'hello fred')
    //
    //
    //
    // var rearged = r = ._rearg(function(a, b, c) {
    //   return [a, b, c];
    // }, [2, 0, 1]);
    //
    // rearged('b', 'c', 'a')
    // eql(r, ['a', 'b', 'c'])
    //
    //
    //
    // var say = r = ._rest(function(what, names) {
    //   return what + ' ' + r = ._initial(names).join(', ') +
    //     (r = ._size(names) > 1 ? ', & ' : '') + r = ._last(names);
    // });
    //
    // say('hello', 'fred', 'barney', 'pebbles');
    // eql(r, 'hello fred, barney, & pebbles')
    //
    //
    //
    // var say = r = ._spread(function(who, what) {
    //   return who + ' says ' + what;
    // });
    //
    // say(['fred', 'hello']);
    // eql(r, 'fred says hello')
    //
    // var numbers = Promise.all([
    //   Promise.resolve(40),
    //   Promise.resolve(36)
    // ]);
    //
    // numbers.then(r = ._spread(function(x, y) {
    //   return x + y;
    // }));
    // eql(r, a Promise of 76)
    //
    //
    //
    // r = ._map(['6', '8', '10'], r = ._unary(parseInt));
    // eql(r, [6, 8, 10])
    //
    //
    //
    // var p = r = ._wrap(r = ._escape, function(func, text) {
    //   return '<p>' + func(text) + '</p>';
    // });
    //
    // p('fred, barney, & pebbles');
    // eql(r, '<p>fred, barney, &amp; pebbles</p>')
    //
    //
    //
    // r = ._castArray(1);
    // eql(r, [1])
    //
    // r = ._castArray({ 'a': 1 });
    // eql(r, [{ 'a': 1 }])
    //
    // r = ._castArray('abc');
    // eql(r, ['abc'])
    //
    // r = ._castArray(null);
    // eql(r, [null])
    //
    // r = ._castArray(undefined);
    // eql(r, [undefined])
    //
    // r = ._castArray();
    // eql(r, [])
    //
    // var array = [1, 2, 3];
    // console.log(r = ._castArray(array) === array);
    // eql(r, true)
    //
    //
    //
    // var objects = [{ 'a': 1 }, { 'b': 2 }];
    //
    // var shallow = r = ._clone(objects);
    // console.log(shallow[0] === objects[0]);
    // eql(r, true)
    //
    //
    //
    // var objects = [{ 'a': 1 }, { 'b': 2 }];
    //
    // var deep = r = ._cloneDeep(objects);
    // console.log(deep[0] === objects[0]);
    // eql(r, false)
    //
    //
    //
    // function customizer(value) {
    //   if (r = ._isElement(value)) {
    //     return value.cloneNode(true);
    //   }
    // }
    //
    // var el = r = ._cloneDeepWith(document.body, customizer);
    //
    // console.log(el === document.body);
    // eql(r, false)
    // console.log(el.nodeName);
    // eql(r, 'BODY')
    // console.log(el.childNodes.length);
    // eql(r, 20)
    //
    //
    //
    // function customizer(value) {
    //   if (r = ._isElement(value)) {
    //     return value.cloneNode(false);
    //   }
    // }
    //
    // var el = r = ._cloneWith(document.body, customizer);
    //
    // console.log(el === document.body);
    // eql(r, false)
    // console.log(el.nodeName);
    // eql(r, 'BODY')
    // console.log(el.childNodes.length);
    // eql(r, 0)
    //
    //
    //
    // var object = { 'a': 1, 'b': 2 };
    //
    // r = ._conformsTo(object, { 'b': function(n) { return n > 1; } });
    // eql(r, true)
    //
    // r = ._conformsTo(object, { 'b': function(n) { return n > 2; } });
    // eql(r, false)
    //
    //
    //
    // var object = { 'a': 1 };
    // var other = { 'a': 1 };
    //
    // r = ._eq(object, object);
    // eql(r, true)
    //
    // r = ._eq(object, other);
    // eql(r, false)
    //
    // r = ._eq('a', 'a');
    // eql(r, true)
    //
    // r = ._eq('a', Object('a'));
    // eql(r, false)
    //
    // r = ._eq(NaN, NaN);
    // eql(r, true)
    //
    //
    //
    // r = ._gt(3, 1);
    // eql(r, true)
    //
    // r = ._gt(3, 3);
    // eql(r, false)
    //
    // r = ._gt(1, 3);
    // eql(r, false)
    //
    //
    //
    // r = ._gte(3, 1);
    // eql(r, true)
    //
    // r = ._gte(3, 3);
    // eql(r, true)
    //
    // r = ._gte(1, 3);
    // eql(r, false)
    //
    //
    //
    // r = ._isArguments(function() { return arguments; }());
    // eql(r, true)
    //
    // r = ._isArguments([1, 2, 3]);
    // eql(r, false)
    //
    //
    //
    // r = ._isArray([1, 2, 3]);
    // eql(r, true)
    //
    // r = ._isArray(document.body.children);
    // eql(r, false)
    //
    // r = ._isArray('abc');
    // eql(r, false)
    //
    // r = ._isArray(r = ._noop);
    // eql(r, false)
    //
    //
    //
    // r = ._isArrayBuffer(new ArrayBuffer(2));
    // eql(r, true)
    //
    // r = ._isArrayBuffer(new Array(2));
    // eql(r, false)
    //
    //
    //
    // r = ._isArrayLike([1, 2, 3]);
    // eql(r, true)
    //
    // r = ._isArrayLike(document.body.children);
    // eql(r, true)
    //
    // r = ._isArrayLike('abc');
    // eql(r, true)
    //
    // r = ._isArrayLike(r = ._noop);
    // eql(r, false)
    //
    //
    //
    // r = ._isArrayLikeObject([1, 2, 3]);
    // eql(r, true)
    //
    // r = ._isArrayLikeObject(document.body.children);
    // eql(r, true)
    //
    // r = ._isArrayLikeObject('abc');
    // eql(r, false)
    //
    // r = ._isArrayLikeObject(r = ._noop);
    // eql(r, false)
    //
    //
    //
    // r = ._isBoolean(false);
    // eql(r, true)
    //
    // r = ._isBoolean(null);
    // eql(r, false)
    //
    //
    //
    // r = ._isBuffer(new Buffer(2));
    // eql(r, true)
    //
    // r = ._isBuffer(new Uint8Array(2));
    // eql(r, false)
    //
    //
    //
    // r = ._isDate(new Date);
    // eql(r, true)
    //
    // r = ._isDate('Mon April 23 2012');
    // eql(r, false)
    //
    //
    //
    // r = ._isElement(document.body);
    // eql(r, true)
    //
    // r = ._isElement('<body>');
    // eql(r, false)
    //
    //
    //
    // r = ._isEmpty(null);
    // eql(r, true)
    //
    // r = ._isEmpty(true);
    // eql(r, true)
    //
    // r = ._isEmpty(1);
    // eql(r, true)
    //
    // r = ._isEmpty([1, 2, 3]);
    // eql(r, false)
    //
    // r = ._isEmpty({ 'a': 1 });
    // eql(r, false)
    //
    //
    //
    // var object = { 'a': 1 };
    // var other = { 'a': 1 };
    //
    // r = ._isEqual(object, other);
    // eql(r, true)
    //
    // object === other;
    // eql(r, false)
    //
    //
    //
    // function isGreeting(value) {
    //   return /^h(?:i|ello)$/.test(value);
    // }
    //
    // function customizer(objValue, othValue) {
    //   if (isGreeting(objValue) && isGreeting(othValue)) {
    //     return true;
    //   }
    // }
    //
    // var array = ['hello', 'goodbye'];
    // var other = ['hi', 'goodbye'];
    //
    // r = ._isEqualWith(array, other, customizer);
    // eql(r, true)
    //
    //
    //
    // r = ._isError(new Error);
    // eql(r, true)
    //
    // r = ._isError(Error);
    // eql(r, false)
    //
    //
    //
    // r = ._isFinite(3);
    // eql(r, true)
    //
    // r = ._isFinite(Number.MINr = ._ALUE);
    // eql(r, true)
    //
    // r = ._isFinite(Infinity);
    // eql(r, false)
    //
    // r = ._isFinite('3');
    // eql(r, false)
    //
    //
    //
    // r = ._isFunction(r = ._;
    // eql(r, true)
    //
    // r = ._isFunction(/abc/);
    // eql(r, false)
    //
    //
    //
    // r = ._isInteger(3);
    // eql(r, true)
    //
    // r = ._isInteger(Number.MINr = ._ALUE);
    // eql(r, false)
    //
    // r = ._isInteger(Infinity);
    // eql(r, false)
    //
    // r = ._isInteger('3');
    // eql(r, false)
    //
    //
    //
    // r = ._isLength(3);
    // eql(r, true)
    //
    // r = ._isLength(Number.MINr = ._ALUE);
    // eql(r, false)
    //
    // r = ._isLength(Infinity);
    // eql(r, false)
    //
    // r = ._isLength('3');
    // eql(r, false)
    //
    //
    //
    // r = ._isMap(new Map);
    // eql(r, true)
    //
    // r = ._isMap(new WeakMap);
    // eql(r, false)
    //
    //
    //
    // var object = { 'a': 1, 'b': 2 };
    //
    // r = ._isMatch(object, { 'b': 2 });
    // eql(r, true)
    //
    // r = ._isMatch(object, { 'b': 1 });
    // eql(r, false)
    //
    //
    //
    // function isGreeting(value) {
    //   return /^h(?:i|ello)$/.test(value);
    // }
    //
    // function customizer(objValue, srcValue) {
    //   if (isGreeting(objValue) && isGreeting(srcValue)) {
    //     return true;
    //   }
    // }
    //
    // var object = { 'greeting': 'hello' };
    // var source = { 'greeting': 'hi' };
    //
    // r = ._isMatchWith(object, source, customizer);
    // eql(r, true)
    //
    //
    //
    // r = ._isNaN(NaN);
    // eql(r, true)
    //
    // r = ._isNaN(new Number(NaN));
    // eql(r, true)
    //
    // isNaN(undefined);
    // eql(r, true)
    //
    // r = ._isNaN(undefined);
    // eql(r, false)
    //
    //
    //
    // r = ._isNative(Array.prototype.push);
    // eql(r, true)
    //
    // r = ._isNative(r = ._;
    // eql(r, false)
    //
    //
    //
    // r = ._isNil(null);
    // eql(r, true)
    //
    // r = ._isNil(void 0);
    // eql(r, true)
    //
    // r = ._isNil(NaN);
    // eql(r, false)
    //
    //
    //
    // r = ._isNull(null);
    // eql(r, true)
    //
    // r = ._isNull(void 0);
    // eql(r, false)
    //
    //
    //
    // r = ._isNumber(3);
    // eql(r, true)
    //
    // r = ._isNumber(Number.MINr = ._ALUE);
    // eql(r, true)
    //
    // r = ._isNumber(Infinity);
    // eql(r, true)
    //
    // r = ._isNumber('3');
    // eql(r, false)
    //
    //
    //
    // r = ._isObject({});
    // eql(r, true)
    //
    // r = ._isObject([1, 2, 3]);
    // eql(r, true)
    //
    // r = ._isObject(r = ._noop);
    // eql(r, true)
    //
    // r = ._isObject(null);
    // eql(r, false)
    //
    //
    //
    // r = ._isObjectLike({});
    // eql(r, true)
    //
    // r = ._isObjectLike([1, 2, 3]);
    // eql(r, true)
    //
    // r = ._isObjectLike(r = ._noop);
    // eql(r, false)
    //
    // r = ._isObjectLike(null);
    // eql(r, false)
    //
    //
    //
    // function Foo() {
    //   this.a = 1;
    // }
    //
    // r = ._isPlainObject(new Foo);
    // eql(r, false)
    //
    // r = ._isPlainObject([1, 2, 3]);
    // eql(r, false)
    //
    // r = ._isPlainObject({ 'x': 0, 'y': 0 });
    // eql(r, true)
    //
    // r = ._isPlainObject(Object.create(null));
    // eql(r, true)
    //
    //
    //
    // r = ._isRegExp(/abc/);
    // eql(r, true)
    //
    // r = ._isRegExp('/abc/');
    // eql(r, false)
    //
    //
    //
    // r = ._isSafeInteger(3);
    // eql(r, true)
    //
    // r = ._isSafeInteger(Number.MINr = ._ALUE);
    // eql(r, false)
    //
    // r = ._isSafeInteger(Infinity);
    // eql(r, false)
    //
    // r = ._isSafeInteger('3');
    // eql(r, false)
    //
    //
    //
    // r = ._isSet(new Set);
    // eql(r, true)
    //
    // r = ._isSet(new WeakSet);
    // eql(r, false)
    //
    //
    //
    // r = ._isString('abc');
    // eql(r, true)
    //
    // r = ._isString(1);
    // eql(r, false)
    //
    //
    //
    // r = ._isSymbol(Symbol.iterator);
    // eql(r, true)
    //
    // r = ._isSymbol('abc');
    // eql(r, false)
    //
    //
    //
    // r = ._isTypedArray(new Uint8Array);
    // eql(r, true)
    //
    // r = ._isTypedArray([]);
    // eql(r, false)
    //
    //
    //
    // r = ._isUndefined(void 0);
    // eql(r, true)
    //
    // r = ._isUndefined(null);
    // eql(r, false)
    //
    //
    //
    // r = ._isWeakMap(new WeakMap);
    // eql(r, true)
    //
    // r = ._isWeakMap(new Map);
    // eql(r, false)
    //
    //
    //
    // r = ._isWeakSet(new WeakSet);
    // eql(r, true)
    //
    // r = ._isWeakSet(new Set);
    // eql(r, false)
    //
    //
    //
    // r = ._lt(1, 3);
    // eql(r, true)
    //
    // r = ._lt(3, 3);
    // eql(r, false)
    //
    // r = ._lt(3, 1);
    // eql(r, false)
    //
    //
    //
    // r = ._lte(1, 3);
    // eql(r, true)
    //
    // r = ._lte(3, 3);
    // eql(r, true)
    //
    // r = ._lte(3, 1);
    // eql(r, false)
    //
    //
    //
    // r = ._toArray({ 'a': 1, 'b': 2 });
    // eql(r, [1, 2])
    //
    // r = ._toArray('abc');
    // eql(r, ['a', 'b', 'c'])
    //
    // r = ._toArray(1);
    // eql(r, [])
    //
    // r = ._toArray(null);
    // eql(r, [])
    //
    //
    //
    // r = ._toFinite(3.2);
    // eql(r, 3.2)
    //
    // r = ._toFinite(Number.MINr = ._ALUE);
    // eql(r, 5e-324)
    //
    // r = ._toFinite(Infinity);
    // eql(r, 1.7976931348623157e+308)
    //
    // r = ._toFinite('3.2');
    // eql(r, 3.2)
    //
    //
    //
    // r = ._toInteger(3.2);
    // eql(r, 3)
    //
    // r = ._toInteger(Number.MINr = ._ALUE);
    // eql(r, 0)
    //
    // r = ._toInteger(Infinity);
    // eql(r, 1.7976931348623157e+308)
    //
    // r = ._toInteger('3.2');
    // eql(r, 3)
    //
    //
    //
    // r = ._toLength(3.2);
    // eql(r, 3)
    //
    // r = ._toLength(Number.MINr = ._ALUE);
    // eql(r, 0)
    //
    // r = ._toLength(Infinity);
    // eql(r, 4294967295)
    //
    // r = ._toLength('3.2');
    // eql(r, 3)
    //
    //
    //
    // r = ._toNumber(3.2);
    // eql(r, 3.2)
    //
    // r = ._toNumber(Number.MINr = ._ALUE);
    // eql(r, 5e-324)
    //
    // r = ._toNumber(Infinity);
    // eql(r, Infinity)
    //
    // r = ._toNumber('3.2');
    // eql(r, 3.2)
    //
    //
    //
    // function Foo() {
    //   this.b = 2;
    // }
    //
    // Foo.prototype.c = 3;
    //
    // r = ._assign({ 'a': 1 }, new Foo);
    // eql(r, { 'a': 1, 'b': 2 })
    //
    // r = ._assign({ 'a': 1 }, r = ._toPlainObject(new Foo));
    // eql(r, { 'a': 1, 'b': 2, 'c': 3 })
    //
    //
    //
    // r = ._toSafeInteger(3.2);
    // eql(r, 3)
    //
    // r = ._toSafeInteger(Number.MINr = ._ALUE);
    // eql(r, 0)
    //
    // r = ._toSafeInteger(Infinity);
    // eql(r, 9007199254740991)
    //
    // r = ._toSafeInteger('3.2');
    // eql(r, 3)
    //
    //
    //
    // r = ._toString(null);
    // eql(r, '')
    //
    // r = ._toString(-0);
    // eql(r, '-0')
    //
    // r = ._toString([1, 2, 3]);
    // eql(r, '1,2,3')
    //
    //
    //
    // r = ._add(6, 4);
    // eql(r, 10)
    //
    //
    //
    // r = ._ceil(4.006);
    // eql(r, 5)
    //
    // r = ._ceil(6.004, 2);
    // eql(r, 6.01)
    //
    // r = ._ceil(6040, -2);
    // eql(r, 6100)
    //
    //
    //
    // r = ._divide(6, 4);
    // eql(r, 1.5)
    //
    //
    //
    // r = ._floor(4.006);
    // eql(r, 4)
    //
    // r = ._floor(0.046, 2);
    // eql(r, 0.04)
    //
    // r = ._floor(4060, -2);
    // eql(r, 4000)
    //
    //
    //
    // r = ._max([4, 2, 8, 6]);
    // eql(r, 8)
    //
    // r = ._max([]);
    // eql(r, undefined)
    //
    //
    //
    // r = ._mean([4, 2, 8, 6]);
    // eql(r, 5)
    //
    //
    //
    // r = ._min([4, 2, 8, 6]);
    // eql(r, 2)
    //
    // r = ._min([]);
    // eql(r, undefined)
    //
    //
    //
    // r = ._multiply(6, 4);
    // eql(r, 24)
    //
    //
    //
    // r = ._round(4.006);
    // eql(r, 4)
    //
    // r = ._round(4.006, 2);
    // eql(r, 4.01)
    //
    // r = ._round(4060, -2);
    // eql(r, 4100)
    //
    //
    //
    // r = ._subtract(6, 4);
    // eql(r, 2)
    //
    //
    //
    // r = ._sum([4, 2, 8, 6]);
    // eql(r, 20)
    //
    //
    //
    // r = ._clamp(-10, -5, 5);
    // eql(r, -5)
    //
    // r = ._clamp(10, -5, 5);
    // eql(r, 5)
    //
    //
    //
    // r = ._inRange(3, 2, 4);
    // eql(r, true)
    //
    // r = ._inRange(4, 8);
    // eql(r, true)
    //
    // r = ._inRange(4, 2);
    // eql(r, false)
    //
    // r = ._inRange(2, 2);
    // eql(r, false)
    //
    // r = ._inRange(1.2, 2);
    // eql(r, true)
    //
    // r = ._inRange(5.2, 4);
    // eql(r, false)
    //
    // r = ._inRange(-3, -2, -6);
    // eql(r, true)
    //
    //
    //
    // r = ._random(0, 5);
    // eql(r, an integer between 0 and 5)
    //
    // r = ._random(5);
    // eql(r, also an integer between 0 and 5)
    //
    // r = ._random(5, true);
    // eql(r, a floating-point number between 0 and 5)
    //
    // r = ._random(1.2, 5.2);
    // eql(r, a floating-point number between 1.2 and 5.2)
    //
    //
    //
    // function Foo() {
    //   this.a = 1;
    // }
    //
    // function Bar() {
    //   this.c = 3;
    // }
    //
    // Foo.prototype.b = 2;
    // Bar.prototype.d = 4;
    //
    // r = ._assign({ 'a': 0 }, new Foo, new Bar);
    // eql(r, { 'a': 1, 'c': 3 })
    //
    //
    //
    // function Foo() {
    //   this.a = 1;
    // }
    //
    // function Bar() {
    //   this.c = 3;
    // }
    //
    // Foo.prototype.b = 2;
    // Bar.prototype.d = 4;
    //
    // r = ._assignIn({ 'a': 0 }, new Foo, new Bar);
    // eql(r, { 'a': 1, 'b': 2, 'c': 3, 'd': 4 })
    //
    //
    //
    // function customizer(objValue, srcValue) {
    //   return r = ._isUndefined(objValue) ? srcValue : objValue;
    // }
    //
    // var defaults = r = ._partialRight(r = ._assignInWith, customizer);
    //
    // defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
    // eql(r, { 'a': 1, 'b': 2 })
    //
    //
    //
    // function customizer(objValue, srcValue) {
    //   return r = ._isUndefined(objValue) ? srcValue : objValue;
    // }
    //
    // var defaults = r = ._partialRight(r = ._assignWith, customizer);
    //
    // defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
    // eql(r, { 'a': 1, 'b': 2 })
    //
    //
    //
    // var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
    //
    // r = ._at(object, ['a[0].b.c', 'a[1]']);
    // eql(r, [3, 4])
    //
    //
    //
    // function Shape() {
    //   this.x = 0;
    //   this.y = 0;
    // }
    //
    // function Circle() {
    //   Shape.call(this);
    // }
    //
    // Circle.prototype = r = ._create(Shape.prototype, {
    //   'constructor': Circle
    // });
    //
    // var circle = new Circle;
    // circle instanceof Circle;
    // eql(r, true)
    //
    // circle instanceof Shape;
    // eql(r, true)
    //
    //
    //
    // r = ._defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
    // eql(r, { 'a': 1, 'b': 2 })
    //
    //
    //
    // r = ._defaultsDeep({ 'a': { 'b': 2 } }, { 'a': { 'b': 1, 'c': 3 } });
    // eql(r, { 'a': { 'b': 2, 'c': 3 } })
    //
    //
    //
    // function Foo() {
    //   this.a = 1;
    //   this.b = 2;
    // }
    //
    // Foo.prototype.c = 3;
    //
    // r = ._forIn(new Foo, function(value, key) {
    //   console.log(key);
    // });
    // eql(r, Logs 'a', 'b', then 'c' (iteration order is not guaranteed).)
    //
    //
    //
    // function Foo() {
    //   this.a = 1;
    //   this.b = 2;
    // }
    //
    // Foo.prototype.c = 3;
    //
    // r = ._forOwn(new Foo, function(value, key) {
    //   console.log(key);
    // });
    // eql(r, Logs 'a' then 'b' (iteration order is not guaranteed).)
    //
    //
    //
    // function Foo() {
    //   this.a = r = ._constant('a');
    //   this.b = r = ._constant('b');
    // }
    //
    // Foo.prototype.c = r = ._constant('c');
    //
    // r = ._functions(new Foo);
    // eql(r, ['a', 'b'])
    //
    //
    //
    // function Foo() {
    //   this.a = r = ._constant('a');
    //   this.b = r = ._constant('b');
    // }
    //
    // Foo.prototype.c = r = ._constant('c');
    //
    // r = ._functionsIn(new Foo);
    // eql(r, ['a', 'b', 'c'])
    //
    //
    //
    // var object = { 'a': [{ 'b': { 'c': 3 } }] };
    //
    // r = ._get(object, 'a[0].b.c');
    // eql(r, 3)
    //
    // r = ._get(object, ['a', '0', 'b', 'c']);
    // eql(r, 3)
    //
    // r = ._get(object, 'a.b.c', 'default');
    // eql(r, 'default')
    //
    //
    //
    // var object = { 'a': { 'b': 2 } };
    // var other = r = ._create({ 'a': r = ._create({ 'b': 2 }) });
    //
    // r = ._has(object, 'a');
    // eql(r, true)
    //
    // r = ._has(object, 'a.b');
    // eql(r, true)
    //
    // r = ._has(object, ['a', 'b']);
    // eql(r, true)
    //
    // r = ._has(other, 'a');
    // eql(r, false)
    //
    //
    //
    // var object = r = ._create({ 'a': r = ._create({ 'b': 2 }) });
    //
    // r = ._hasIn(object, 'a');
    // eql(r, true)
    //
    // r = ._hasIn(object, 'a.b');
    // eql(r, true)
    //
    // r = ._hasIn(object, ['a', 'b']);
    // eql(r, true)
    //
    // r = ._hasIn(object, 'b');
    // eql(r, false)
    //
    //
    //
    // var object = { 'a': 1, 'b': 2, 'c': 1 };
    //
    // r = ._invert(object);
    // eql(r, { '1': 'c', '2': 'b' })
    //
    //
    //
    // var object = { 'a': 1, 'b': 2, 'c': 1 };
    //
    // r = ._invertBy(object);
    // eql(r, { '1': ['a', 'c'], '2': ['b'] })
    //
    // r = ._invertBy(object, function(value) {
    //   return 'group' + value;
    // });
    // eql(r, { 'group1': ['a', 'c'], 'group2': ['b'] })
    //
    //
    //
    // var object = { 'a': [{ 'b': { 'c': [1, 2, 3, 4] } }] };
    //
    // r = ._invoke(object, 'a[0].b.c.slice', 1, 3);
    // eql(r, [2, 3])
    //
    //
    //
    // function Foo() {
    //   this.a = 1;
    //   this.b = 2;
    // }
    //
    // Foo.prototype.c = 3;
    //
    // r = ._keys(new Foo);
    // eql(r, ['a', 'b'] (iteration order is not guaranteed))
    //
    // r = ._keys('hi');
    // eql(r, ['0', '1'])
    //
    //
    //
    // function Foo() {
    //   this.a = 1;
    //   this.b = 2;
    // }
    //
    // Foo.prototype.c = 3;
    //
    // r = ._keysIn(new Foo);
    // eql(r, ['a', 'b', 'c'] (iteration order is not guaranteed))
    //
    //
    //
    // r = ._mapKeys({ 'a': 1, 'b': 2 }, function(value, key) {
    //   return key + value;
    // });
    // eql(r, { 'a1': 1, 'b2': 2 })
    //
    //
    //
    // var object = {
    //   'a': [{ 'b': 2 }, { 'd': 4 }]
    // };
    //
    // var other = {
    //   'a': [{ 'c': 3 }, { 'e': 5 }]
    // };
    //
    // r = ._merge(object, other);
    // eql(r, { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] })
    //
    //
    //
    // function customizer(objValue, srcValue) {
    //   if (r = ._isArray(objValue)) {
    //     return objValue.concat(srcValue);
    //   }
    // }
    //
    // var object = { 'a': [1], 'b': [2] };
    // var other = { 'a': [3], 'b': [4] };
    //
    // r = ._mergeWith(object, other, customizer);
    // eql(r, { 'a': [1, 3], 'b': [2, 4] })
    //
    //
    //
    // var object = { 'a': 1, 'b': '2', 'c': 3 };
    //
    // r = ._omit(object, ['a', 'c']);
    // eql(r, { 'b': '2' })
    //
    //
    //
    // var object = { 'a': 1, 'b': '2', 'c': 3 };
    //
    // r = ._omitBy(object, r = ._isNumber);
    // eql(r, { 'b': '2' })
    //
    //
    //
    // var object = { 'a': 1, 'b': '2', 'c': 3 };
    //
    // r = ._pick(object, ['a', 'c']);
    // eql(r, { 'a': 1, 'c': 3 })
    //
    //
    //
    // var object = { 'a': 1, 'b': '2', 'c': 3 };
    //
    // r = ._pickBy(object, r = ._isNumber);
    // eql(r, { 'a': 1, 'c': 3 })
    //
    //
    //
    // var object = { 'a': [{ 'b': { 'c1': 3, 'c2': r = ._constant(4) } }] };
    //
    // r = ._result(object, 'a[0].b.c1');
    // eql(r, 3)
    //
    // r = ._result(object, 'a[0].b.c2');
    // eql(r, 4)
    //
    // r = ._result(object, 'a[0].b.c3', 'default');
    // eql(r, 'default')
    //
    // r = ._result(object, 'a[0].b.c3', r = ._constant('default'));
    // eql(r, 'default')
    //
    //
    //
    // var object = { 'a': [{ 'b': { 'c': 3 } }] };
    //
    // r = ._set(object, 'a[0].b.c', 4);
    // console.log(object.a[0].b.c);
    // eql(r, 4)
    //
    // r = ._set(object, ['x', '0', 'y', 'z'], 5);
    // console.log(object.x[0].y.z);
    // eql(r, 5)
    //
    //
    //
    // var object = {};
    //
    // r = ._setWith(object, '[0][1]', 'a', Object);
    // eql(r, { '0': { '1': 'a' } })
    //
    //
    //
    // function Foo() {
    //   this.a = 1;
    //   this.b = 2;
    // }
    //
    // Foo.prototype.c = 3;
    //
    // r = ._toPairs(new Foo);
    // eql(r, [['a', 1], ['b', 2]] (iteration order is not guaranteed))
    //
    //
    //
    // function Foo() {
    //   this.a = 1;
    //   this.b = 2;
    // }
    //
    // Foo.prototype.c = 3;
    //
    // r = ._toPairsIn(new Foo);
    // eql(r, [['a', 1], ['b', 2], ['c', 3]] (iteration order is not guaranteed))
    //
    //
    //
    // r = ._transform([2, 3, 4], function(result, n) {
    //   result.push(n *= n);
    //   return n % 2 == 0;
    // }, []);
    // eql(r, [4, 9])
    //
    // r = ._transform({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
    //   (result[value] || (result[value] = [])).push(key);
    // }, {});
    // eql(r, { '1': ['a', 'c'], '2': ['b'] })
    //
    //
    //
    // var object = { 'a': [{ 'b': { 'c': 7 } }] };
    // r = ._unset(object, 'a[0].b.c');
    // eql(r, true)
    //
    // console.log(object);
    // eql(r, { 'a': [{ 'b': {} }] };)
    //
    // r = ._unset(object, ['a', '0', 'b', 'c']);
    // eql(r, true)
    //
    // console.log(object);
    // eql(r, { 'a': [{ 'b': {} }] };)
    //
    //
    //
    // var object = { 'a': [{ 'b': { 'c': 3 } }] };
    //
    // r = ._update(object, 'a[0].b.c', function(n) { return n * n; });
    // console.log(object.a[0].b.c);
    // eql(r, 9)
    //
    // r = ._update(object, 'x[0].y.z', function(n) { return n ? n + 1 : 0; });
    // console.log(object.x[0].y.z);
    // eql(r, 0)
    //
    //
    //
    // var object = {};
    //
    // r = ._updateWith(object, '[0][1]', r = ._constant('a'), Object);
    // eql(r, { '0': { '1': 'a' } })
    //
    //
    //
    // function Foo() {
    //   this.a = 1;
    //   this.b = 2;
    // }
    //
    // Foo.prototype.c = 3;
    //
    // r = ._values(new Foo);
    // eql(r, [1, 2] (iteration order is not guaranteed))
    //
    // r = ._values('hi');
    // eql(r, ['h', 'i'])
    //
    //
    //
    // function Foo() {
    //   this.a = 1;
    //   this.b = 2;
    // }
    //
    // Foo.prototype.c = 3;
    //
    // r = ._valuesIn(new Foo);
    // eql(r, [1, 2, 3] (iteration order is not guaranteed))
    //
    //
    //
    // function square(n) {
    //   return n * n;
    // }
    //
    // var wrapped = r = ._[1, 2, 3]);
    //
    // // Returns an unwrapped value.
    // wrapped.reduce(r = ._add);
    // eql(r, 6)
    //
    // // Returns a wrapped value.
    // var squares = wrapped.map(square);
    //
    // r = ._isArray(squares);
    // eql(r, false)
    //
    // r = ._isArray(squares.value());
    // eql(r, true)
    //
    //
    //
    // var users = [
    //   { 'user': 'barney',  'age': 36 },
    //   { 'user': 'fred',    'age': 40 },
    //   { 'user': 'pebbles', 'age': 1 }
    // ];
    //
    // var youngest = _
    //   .chain(users)
    //   .sortBy('age')
    //   .map(function(o) {
    //     return o.user + ' is ' + o.age;
    //   })
    //   .head()
    //   .value();
    // eql(r, 'pebbles is 1')
    //
    //
    //
    // r = ._[1, 2, 3])
    //  .tap(function(array) {
    //    // Mutate input array.
    //    array.pop();
    //  })
    //  .reverse()
    //  .value();
    // eql(r, [2, 1])
    //
    //
    //
    // r = ._'  abc  ')
    //  .chain()
    //  .trim()
    //  .thru(function(value) {
    //    return [value];
    //  })
    //  .value();
    // eql(r, ['abc'])
    //
    //
    //
    // var wrapped = r = ._[1, 2]);
    //
    // wrapped[Symbol.iterator]() === wrapped;
    // eql(r, true)
    //
    // Array.from(wrapped);
    // eql(r, [1, 2])
    //
    //
    //
    // var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
    //
    // r = ._object).at(['a[0].b.c', 'a[1]']).value();
    // eql(r, [3, 4])
    //
    //
    //
    // var users = [
    //   { 'user': 'barney', 'age': 36 },
    //   { 'user': 'fred',   'age': 40 }
    // ];
    //
    // // A sequence without explicit chaining.
    // r = ._users).head();
    // eql(r, { 'user': 'barney', 'age': 36 })
    //
    // // A sequence with explicit chaining.
    // r = ._users)
    //   .chain()
    //   .head()
    //   .pick('user')
    //   .value();
    // eql(r, { 'user': 'barney' })
    //
    //
    //
    // var array = [1, 2];
    // var wrapped = r = ._array).push(3);
    //
    // console.log(array);
    // eql(r, [1, 2])
    //
    // wrapped = wrapped.commit();
    // console.log(array);
    // eql(r, [1, 2, 3])
    //
    // wrapped.last();
    // eql(r, 3)
    //
    // console.log(array);
    // eql(r, [1, 2, 3])
    //
    //
    //
    // var wrapped = r = ._[1, 2]);
    //
    // wrapped.next();
    // eql(r, { 'done': false, 'value': 1 })
    //
    // wrapped.next();
    // eql(r, { 'done': false, 'value': 2 })
    //
    // wrapped.next();
    // eql(r, { 'done': true, 'value': undefined })
    //
    //
    //
    // function square(n) {
    //   return n * n;
    // }
    //
    // var wrapped = r = ._[1, 2]).map(square);
    // var other = wrapped.plant([3, 4]);
    //
    // other.value();
    // eql(r, [9, 16])
    //
    // wrapped.value();
    // eql(r, [1, 4])
    //
    //
    //
    // var array = [1, 2, 3];
    //
    // r = ._array).reverse().value()
    // eql(r, [3, 2, 1])
    //
    // console.log(array);
    // eql(r, [3, 2, 1])
    //
    //
    //
    // r = ._[1, 2, 3]).value();
    // eql(r, [1, 2, 3])
    //
    //
    //
    // r = ._camelCase('Foo Bar');
    // eql(r, 'fooBar')
    //
    // r = ._camelCase('--foo-bar--');
    // eql(r, 'fooBar')
    //
    // r = ._camelCase('r = ._FOOr = ._ARr = ._');
    // eql(r, 'fooBar')
    //
    //
    //
    // r = ._capitalize('FRED');
    // eql(r, 'Fred')
    //
    //
    //
    // r = ._deburr('déjà vu');
    // eql(r, 'deja vu')
    //
    //
    //
    // r = ._endsWith('abc', 'c');
    // eql(r, true)
    //
    // r = ._endsWith('abc', 'b');
    // eql(r, false)
    //
    // r = ._endsWith('abc', 'b', 2);
    // eql(r, true)
    //
    //
    //
    // r = ._escape('fred, barney, & pebbles');
    // eql(r, 'fred, barney, &amp; pebbles')
    //
    //
    //
    // r = ._escapeRegExp('[lodash](https://lodash.com/)');
    // eql(r, '\[lodash\]\(https://lodash\.com/\)')
    //
    //
    //
    // r = ._kebabCase('Foo Bar');
    // eql(r, 'foo-bar')
    //
    // r = ._kebabCase('fooBar');
    // eql(r, 'foo-bar')
    //
    // r = ._kebabCase('r = ._FOOr = ._ARr = ._');
    // eql(r, 'foo-bar')
    //
    //
    //
    // r = ._lowerCase('--Foo-Bar--');
    // eql(r, 'foo bar')
    //
    // r = ._lowerCase('fooBar');
    // eql(r, 'foo bar')
    //
    // r = ._lowerCase('r = ._FOOr = ._ARr = ._');
    // eql(r, 'foo bar')
    //
    //
    //
    // r = ._lowerFirst('Fred');
    // eql(r, 'fred')
    //
    // r = ._lowerFirst('FRED');
    // eql(r, 'fRED')
    //
    //
    //
    // r = ._pad('abc', 8);
    // eql(r, '  abc   ')
    //
    // r = ._pad('abc', 8, 'r = ._');
    // eql(r, 'r = ._abcr = ._r = ._)
    //
    // r = ._pad('abc', 3);
    // eql(r, 'abc')
    //
    //
    //
    // r = ._padEnd('abc', 6);
    // eql(r, 'abc   ')
    //
    // r = ._padEnd('abc', 6, 'r = ._');
    // eql(r, 'abcr = ._r = ._)
    //
    // r = ._padEnd('abc', 3);
    // eql(r, 'abc')
    //
    //
    //
    // r = ._padStart('abc', 6);
    // eql(r, '   abc')
    //
    // r = ._padStart('abc', 6, 'r = ._');
    // eql(r, 'r = ._r = ._bc')
    //
    // r = ._padStart('abc', 3);
    // eql(r, 'abc')
    //
    //
    //
    // r = ._parseInt('08');
    // eql(r, 8)
    //
    // r = ._map(['6', '08', '10'], r = ._parseInt);
    // eql(r, [6, 8, 10])
    //
    //
    //
    // r = ._repeat('*', 3);
    // eql(r, '***')
    //
    // r = ._repeat('abc', 2);
    // eql(r, 'abcabc')
    //
    // r = ._repeat('abc', 0);
    // eql(r, '')
    //
    //
    //
    // r = ._replace('Hi Fred', 'Fred', 'Barney');
    // eql(r, 'Hi Barney')
    //
    //
    //
    // r = ._snakeCase('Foo Bar');
    // eql(r, 'foor = ._ar')
    //
    // r = ._snakeCase('fooBar');
    // eql(r, 'foor = ._ar')
    //
    // r = ._snakeCase('--FOO-BAR--');
    // eql(r, 'foor = ._ar')
    //
    //
    //
    // r = ._split('a-b-c', '-', 2);
    // eql(r, ['a', 'b'])
    //
    //
    //
    // r = ._startCase('--foo-bar--');
    // eql(r, 'Foo Bar')
    //
    // r = ._startCase('fooBar');
    // eql(r, 'Foo Bar')
    //
    // r = ._startCase('r = ._FOOr = ._ARr = ._');
    // eql(r, 'FOO BAR')
    //
    //
    //
    // r = ._startsWith('abc', 'a');
    // eql(r, true)
    //
    // r = ._startsWith('abc', 'b');
    // eql(r, false)
    //
    // r = ._startsWith('abc', 'b', 1);
    // eql(r, true)
    //
    //
    //
    // r = ._toLower('--Foo-Bar--');
    // eql(r, '--foo-bar--')
    //
    // r = ._toLower('fooBar');
    // eql(r, 'foobar')
    //
    // r = ._toLower('r = ._FOOr = ._ARr = ._');
    // eql(r, 'r = ._foor = ._arr = ._')
    //
    //
    //
    // r = ._toUpper('--foo-bar--');
    // eql(r, '--FOO-BAR--')
    //
    // r = ._toUpper('fooBar');
    // eql(r, 'FOOBAR')
    //
    // r = ._toUpper('r = ._foor = ._arr = ._');
    // eql(r, 'r = ._FOOr = ._ARr = ._')
    //
    //
    //
    // r = ._trim('  abc  ');
    // eql(r, 'abc')
    //
    // r = ._trim('-r = ._abc-r = ._', 'r = ._');
    // eql(r, 'abc')
    //
    // r = ._map(['  foo  ', '  bar  '], r = ._trim);
    // eql(r, ['foo', 'bar'])
    //
    //
    //
    // r = ._trimEnd('  abc  ');
    // eql(r, '  abc')
    //
    // r = ._trimEnd('-r = ._abc-r = ._', 'r = ._');
    // eql(r, '-r = ._abc')
    //
    //
    //
    // r = ._trimStart('  abc  ');
    // eql(r, 'abc  ')
    //
    // r = ._trimStart('-r = ._abc-r = ._', 'r = ._');
    // eql(r, 'abc-r = ._')
    //
    //
    //
    // r = ._truncate('hi-diddly-ho there, neighborino');
    // eql(r, 'hi-diddly-ho there, neighbo...')
    //
    // r = ._truncate('hi-diddly-ho there, neighborino', {
    //   'length': 24,
    //   'separator': ' '
    // });
    // eql(r, 'hi-diddly-ho there,...')
    //
    // r = ._truncate('hi-diddly-ho there, neighborino', {
    //   'length': 24,
    //   'separator': /,? +/
    // });
    // eql(r, 'hi-diddly-ho there...')
    //
    // r = ._truncate('hi-diddly-ho there, neighborino', {
    //   'omission': ' [...]'
    // });
    // eql(r, 'hi-diddly-ho there, neig [...]')
    //
    //
    //
    // r = ._unescape('fred, barney, &amp; pebbles');
    // eql(r, 'fred, barney, & pebbles')
    //
    //
    //
    // r = ._upperCase('--foo-bar');
    // eql(r, 'FOO BAR')
    //
    // r = ._upperCase('fooBar');
    // eql(r, 'FOO BAR')
    //
    // r = ._upperCase('r = ._foor = ._arr = ._');
    // eql(r, 'FOO BAR')
    //
    //
    //
    // r = ._upperFirst('fred');
    // eql(r, 'Fred')
    //
    // r = ._upperFirst('FRED');
    // eql(r, 'FRED')
    //
    //
    //
    // r = ._words('fred, barney, & pebbles');
    // eql(r, ['fred', 'barney', 'pebbles'])
    //
    // r = ._words('fred, barney, & pebbles', /[^, ]+/g);
    // eql(r, ['fred', 'barney', '&', 'pebbles'])
    //
    //
    //
    // // Avoid throwing errors for invalid selectors.
    // var elements = r = ._attempt(function(selector) {
    //   return document.querySelectorAll(selector);
    // }, '>r = ._');
    //
    // if (r = ._isError(elements)) {
    //   elements = [];
    // }
    //
    //
    //
    // var view = {
    //   'label': 'docs',
    //   'click': function() {
    //     console.log('clicked ' + this.label);
    //   }
    // };
    //
    // r = ._bindAll(view, ['click']);
    // jQuery(element).on('click', view.click);
    // eql(r, Logs 'clicked docs' when clicked.)
    //
    //
    //
    // var func = r = ._cond([
    //   [r = ._matches({ 'a': 1 }),           r = ._constant('matches A')],
    //   [r = ._conforms({ 'b': r = ._isNumber }), r = ._constant('matches B')],
    //   [r = ._stubTrue,                      r = ._constant('no match')]
    // ]);
    //
    // func({ 'a': 1, 'b': 2 });
    // eql(r, 'matches A')
    //
    // func({ 'a': 0, 'b': 1 });
    // eql(r, 'matches B')
    //
    // func({ 'a': '1', 'b': '2' });
    // eql(r, 'no match')
    //
    //
    //
    // var objects = [
    //   { 'a': 2, 'b': 1 },
    //   { 'a': 1, 'b': 2 }
    // ];
    //
    // r = ._filter(objects, r = ._conforms({ 'b': function(n) { return n > 1; } }));
    // eql(r, [{ 'a': 1, 'b': 2 }])
    //
    //
    //
    // var objects = r = ._times(2, r = ._constant({ 'a': 1 }));
    //
    // console.log(objects);
    // eql(r, [{ 'a': 1 }, { 'a': 1 }])
    //
    // console.log(objects[0] === objects[1]);
    // eql(r, true)
    //
    //
    //
    // r = ._defaultTo(1, 10);
    // eql(r, 1)
    //
    // r = ._defaultTo(undefined, 10);
    // eql(r, 10)
    //
    //
    //
    // function square(n) {
    //   return n * n;
    // }
    //
    // var addSquare = r = ._flow([r = ._add, square]);
    // addSquare(1, 2);
    // eql(r, 9)
    //
    //
    //
    // function square(n) {
    //   return n * n;
    // }
    //
    // var addSquare = r = ._flowRight([square, r = ._add]);
    // addSquare(1, 2);
    // eql(r, 9)
    //
    //
    //
    // var object = { 'a': 1 };
    //
    // console.log(r = ._identity(object) === object);
    // eql(r, true)
    //
    //
    //
    // var objects = [
    //   { 'a': 1, 'b': 2, 'c': 3 },
    //   { 'a': 4, 'b': 5, 'c': 6 }
    // ];
    //
    // r = ._filter(objects, r = ._matches({ 'a': 4, 'c': 6 }));
    // eql(r, [{ 'a': 4, 'b': 5, 'c': 6 }])
    //
    //
    //
    // var objects = [
    //   { 'a': 1, 'b': 2, 'c': 3 },
    //   { 'a': 4, 'b': 5, 'c': 6 }
    // ];
    //
    // r = objects._find(_matchesProperty('a', 4));
    // eql(r, { 'a': 4, 'b': 5, 'c': 6 })
    //
    //
    //
    // var objects = [
    //   { 'a': { 'b': r = ._constant(2) } },
    //   { 'a': { 'b': r = ._constant(1) } }
    // ];
    //
    // r = ._map(objects, r = ._method('a.b'));
    // eql(r, [2, 1])
    //
    // r = ._map(objects, r = ._method(['a', 'b']));
    // eql(r, [2, 1])
    //
    //
    //
    // var array = r = ._times(3, r = ._constant),
    //     object = { 'a': array, 'b': array, 'c': array };
    //
    // r = ._map(['a[2]', 'c[0]'], r = ._methodOf(object));
    // eql(r, [2, 0])
    //
    // r = ._map([['a', '2'], ['c', '0']], r = ._methodOf(object));
    // eql(r, [2, 0])
    //
    //
    //
    // function vowels(string) {
    //   return r = ._filter(string, function(v) {
    //     return /[aeiou]/i.test(v);
    //   });
    // }
    //
    // r = ._mixin({ 'vowels': vowels });
    // r = ._vowels('fred');
    // eql(r, ['e'])
    //
    // r = ._'fred').vowels().value();
    // eql(r, ['e'])
    //
    // r = ._mixin({ 'vowels': vowels }, { 'chain': false });
    // r = ._'fred').vowels();
    // eql(r, ['e'])
    //
    //
    //
    // var lodash = r = ._noConflict();
    //
    //
    //
    // r = ._times(2, r = ._noop);
    // eql(r, [undefined, undefined])
    //
    //
    //
    // var func = r = ._nthArg(1);
    // func('a', 'b', 'c', 'd');
    // eql(r, 'b')
    //
    // var func = r = ._nthArg(-2);
    // func('a', 'b', 'c', 'd');
    // eql(r, 'c')
    //
    //
    //
    // var func = r = ._over([Math.max, Math.min]);
    //
    // func(1, 2, 3, 4);
    // eql(r, [4, 1])
    //
    //
    //
    // var func = r = ._overEvery([Boolean, isFinite]);
    //
    // func('1');
    // eql(r, true)
    //
    // func(null);
    // eql(r, false)
    //
    // func(NaN);
    // eql(r, false)
    //
    //
    //
    // var func = r = ._overSome([Boolean, isFinite]);
    //
    // func('1');
    // eql(r, true)
    //
    // func(null);
    // eql(r, true)
    //
    // func(NaN);
    // eql(r, false)
    //
    //
    //
    // var objects = [
    //   { 'a': { 'b': 2 } },
    //   { 'a': { 'b': 1 } }
    // ];
    //
    // r = ._map(objects, r = ._property('a.b'));
    // eql(r, [2, 1])
    //
    // r = ._map(r = ._sortBy(objects, r = ._property(['a', 'b'])), 'a.b');
    // eql(r, [1, 2])
    //
    //
    //
    // var array = [0, 1, 2],
    //     object = { 'a': array, 'b': array, 'c': array };
    //
    // r = ._map(['a[2]', 'c[0]'], r = ._propertyOf(object));
    // eql(r, [2, 0])
    //
    // r = ._map([['a', '2'], ['c', '0']], r = ._propertyOf(object));
    // eql(r, [2, 0])
    //
    //
    //
    // r = ._range(4);
    // eql(r, [0, 1, 2, 3])
    //
    // r = ._range(-4);
    // eql(r, [0, -1, -2, -3])
    //
    // r = ._range(1, 5);
    // eql(r, [1, 2, 3, 4])
    //
    // r = ._range(0, 20, 5);
    // eql(r, [0, 5, 10, 15])
    //
    // r = ._range(0, -4, -1);
    // eql(r, [0, -1, -2, -3])
    //
    // r = ._range(1, 4, 0);
    // eql(r, [1, 1, 1])
    //
    // r = ._range(0);
    // eql(r, [])
    //
    //
    //
    // r = ._rangeRight(4);
    // eql(r, [3, 2, 1, 0])
    //
    // r = ._rangeRight(-4);
    // eql(r, [-3, -2, -1, 0])
    //
    // r = ._rangeRight(1, 5);
    // eql(r, [4, 3, 2, 1])
    //
    // r = ._rangeRight(0, 20, 5);
    // eql(r, [15, 10, 5, 0])
    //
    // r = ._rangeRight(0, -4, -1);
    // eql(r, [-3, -2, -1, 0])
    //
    // r = ._rangeRight(1, 4, 0);
    // eql(r, [1, 1, 1])
    //
    // r = ._rangeRight(0);
    // eql(r, [])
    //
    //
    //
    // var arrays = r = ._times(2, r = ._stubArray);
    //
    // console.log(arrays);
    // eql(r, [[], []])
    //
    // console.log(arrays[0] === arrays[1]);
    // eql(r, false)
    //
    //
    //
    // r = ._times(2, r = ._stubFalse);
    // eql(r, [false, false])
    //
    //
    //
    // var objects = r = ._times(2, r = ._stubObject);
    //
    // console.log(objects);
    // eql(r, [{}, {}])
    //
    // console.log(objects[0] === objects[1]);
    // eql(r, false)
    //
    //
    //
    // r = ._times(2, r = ._stubString);
    // eql(r, ['', ''])
    //
    //
    //
    // r = ._times(2, r = ._stubTrue);
    // eql(r, [true, true])
    //
    //
    //
    // r = ._times(3, String);
    // eql(r, ['0', '1', '2'])
    //
    //  r = ._times(4, r = ._constant(0));
    // eql(r, [0, 0, 0, 0])
    //
    //
    //
    // r = ._toPath('a.b.c');
    // eql(r, ['a', 'b', 'c'])
    //
    // r = ._toPath('a[0].b.c');
    // eql(r, ['a', '0', 'b', 'c'])
    //
    //
    //
    // r = ._uniqueId('contactr = ._);
    // eql(r, 'contactr = ._04')
    //
    // r = ._uniqueId();
    // eql(r, '105')

  })
})
