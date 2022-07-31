# JSF*** Quine

```js
(()=>{})[(({}+[])[+!![]+ +!![]+ +!![]+ +!![]+ +!![]]+({}+[])[+!![]]+([][+![]]+[])[+!![]]+(![]+[])[+!![]+ +!![]+ +!![]]+(!![]+[])[+![]]+(!![]+[])[+!![]]+(!![]+[])[+!!
[]+ +!![]]+({}+[])[+!![]+ +!![]+ +!![]+ +!![]+ +!![]]+(!![]+[])[+![]]+({}+[])[+!![]]+(!![]+[])[+!![]])]((([]+[])[(({}+[])[+!![]+ +!![]+ +!![]+ +!![]+ +!![]]+({}+[])
[+!![]]+([][+![]]+[])[+!![]]+(![]+[])[+!![]+ +!![]+ +!![]]+(!![]+[])[+![]]+(!![]+[])[+!![]]+(!![]+[])[+!![]+ +!![]]+({}+[])[+!![]+ +!![]+ +!![]+ +!![]+ +!![]]+(!![]+
[])[+![]]+({}+[])[+!![]]+(!![]+[])[+!![]])][((![]+[])[+![]]+(!![]+[])[+!![]]+({}+[])[+!![]]+((+![])[(({}+[])[+!![]+ +!![]+ +!![]+ +!![]+ +!![]]+({}+[])[+!![]]+([][+!
[]]+[])[+!![]]+(![]+[])[+!![]+ +!![]+ +!![]]+(!![]+[])[+![]]+(!![]+[])[+!![]]+(!![]+[])[+!![]+ +!![]]+({}+[])[+!![]+ +!![]+ +!![]+ +!![]+ +!![]]+(!![]+[])[+![]]+({}+
[])[+!![]]+(!![]+[])[+!![]])]+[])[+!![]+ +!![]+ +!![]+ +!![]+ +!![]+ +!![]+ +!![]+ +!![]+ +!![]+ +!![]+ +!![]]+(()=>{})[(({}+[])[+!![]+ +!![]+ +!![]+ +!![]+ +!![]]+
({}+[])[+!![]]+([][+![]]+[])[+!![]]+(![]+[])[+!![]+ +!![]+ +!![]]+(!![]+[])[+![]]+(!![]+[])[+!![]]+(!![]+[])[+!![]+ +!![]]+({}+[])[+!![]+ +!![]+ +!![]+ +!![]+ +!![]]+
(!![]+[])[+![]]+({}+[])[+!![]]+(!![]+[])[+!![]])](((!![]+[])[+!![]]+(![]+[])[+!![]+ +!![]+ +!![]+ +!![]]+(!![]+[])[+![]]+(!![]+[])[+!![]+ +!![]]+(!![]+[])[+!![]]+([]
[+![]]+[])[+!![]]+({}+[])[+!![]+ +!![]+ +!![]+ +!![]+ +!![]+ +!![]+ +!![]]+(![]+[])[+!![]+ +!![]+ +!![]+ +!![]]+(![]+[])[+!![]+ +!![]+ +!![]]+({}+[])[+!![]+ +!![]+ +!!
[]+ +!![]+ +!![]]+(![]+[])[+!![]]+(/-/[(({}+[])[+!![]+ +!![]+ +!![]+ +!![]+ +!![]]+({}+[])[+!![]]+([][+![]]+[])[+!![]]+(![]+[])[+!![]+ +!![]+ +!![]]+(!![]+[])[+![] ...
```

A 966-byte JavaScript quine generator that produces a valid self-replicating file that utilizes only 8 different characters.

## Inspiration

All credit goes to the owner of the channel [Low Level Javascript](https://www.youtube.com/c/LowLevelJavaScript). This is based on a video of his, titled [JavaScript Is Weird (EXTREME EDITION)
](https://www.youtube.com/watch?v=sRWE5tnaxlI).

## Running the script (producing the quine)

Due to some character encoding problems, this is known to produce faulty programs on Windows 11 with Node version 16.14.2. On Ubuntu with Node version 10.19.0, however, correct output is produced.

Be warned that the generated file exceeds 3MB.

```sh
node quinegen.js > quine0.js
```

## Producing a self-similar script

```sh
node quine0.js > quine1.js
```

## Verifying the files are the same

On most *nix systems, the output of the following should be blank:

```sh
diff -q quine0.js quine1.js
```

## About the repository

alpha/ contains testing scripts that should be more readable than <i>quinegen.js</i>.
