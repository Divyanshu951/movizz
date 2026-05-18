src/components/ui/MovieDetailsCard.tsx:73:37 - error TS7006: Parameter 'ttl' implicitly has an 'any' type.

73 : title.split(":").map((ttl, i, arr) => (
~~~

src/components/ui/MovieDetailsCard.tsx:73:42 - error TS7006: Parameter 'i' implicitly has an 'any' type.

73 : title.split(":").map((ttl, i, arr) => (
~

src/components/ui/MovieDetailsCard.tsx:73:45 - error TS7006: Parameter 'arr' implicitly has an 'any' type.

73 : title.split(":").map((ttl, i, arr) => (
~~~

src/components/ui/MovieDetailsCard.tsx:91:34 - error TS7006: Parameter 'country' implicitly has an 'any' type.

91 {origin_country.map((country) => (
~~~~~~~

src/components/ui/MovieDetailsCard.tsx:102:26 - error TS7006: Parameter 'genre' implicitly has an 'any' type.

102 {genres.map((genre, index) => {
~~~~~

src/components/ui/MovieDetailsCard.tsx:102:33 - error TS7006: Parameter 'index' implicitly has an 'any' type.

102 {genres.map((genre, index) => {
~~~~~

src/pages/Home.tsx:102:13 - error TS2322: Type '{ hidden: { opacity: number; y: number; }; show: { opacity: number; y: number; transition: { type: string; stiffness: number; damping: number; }; }; }' is not assignable to type 'Variants'.
Property 'show' is incompatible with index signature.
Type '{ opacity: number; y: number; transition: { type: string; stiffness: number; damping: number; }; }' is not assignable to type 'Variant'.
Type '{ opacity: number; y: number; transition: { type: string; stiffness: number; damping: number; }; }' is not assignable to type 'TargetAndTransition'.
Type '{ opacity: number; y: number; transition: { type: string; stiffness: number; damping: number; }; }' is not assignable to type '{ transition?: Transition<any> | undefined; transitionEnd?: ResolvedValues$1 | undefined; }'.
Types of property 'transition' are incompatible.
Type '{ type: string; stiffness: number; damping: number; }' is not assignable to type 'Transition<any> | undefined'.
Type '{ type: string; stiffness: number; damping: number; }' is not assignable to type 'TransitionWithValueOverrides<any>'.
Type '{ type: string; stiffness: number; damping: number; }' is not assignable to type 'ValueAnimationTransition<any>'.
Types of property 'type' are incompatible.
Type 'string' is not assignable to type 'AnimationGeneratorType | undefined'.

102 variants={itemVariants}
~~~~~~~~

node_modules/motion-dom/dist/index.d.ts:290:5
290 variants?: Variants;
~~~~~~~~
The expected type comes from property 'variants' which is declared here on type 'IntrinsicAttributes & Omit<HTMLMotionProps<"div">, "ref"> & RefAttributes<HTMLDivElement>'

src/pages/SearchResults.tsx:102:28 - error TS7006: Parameter 'item' implicitly has an 'any' type.

102 {data.results.map((item) => (
~~~~

src/types.ts:1:6 - error TS6196: 'SearchResponseitem' is declared but never used.

1 type SearchResponseitem = {};
~~~~~~~~~~~~~~~~~~

Found 9 errors.

divya@Div_LOQ MINGW64 ~/vscode/REAL_PROJECTS/movizz (main)
