# RGBjs

RGBjs est une librairie pour geré les couleure rgb.

## constructeur
```js
new rgb();
```
par defaut, si vous ne presciser pas d'argument,
rgb irra chercher les valeure defini dans `rgb.config.defaultColor` et `rgb.config.defaultAlpha`. Ces valeures penvent être changer.
ex:
```js
new rgb(255, 0, 0, 1);
```
revoira un rouge.

## class annexes

Noter qu'il existe des couleure pre-crée avec des classes, tel que:
```js
new rgb.red()   // renvera un rouge
new rgb.green() // renvera un vert
new rgb.blue()  // renvera un bleu
new rgb.black() // renvera un noire
new rgb.white() // renvera un blanc
new rgb.grey()  // renvera un gris
```
Vous pouver toujour en rajouter avec la methode static `rgb.addColorClass()`
```js
rgb.addColorClass(nom, couleure);
```
ou `nom` est le nom que vous vouler donner a la couleure pour l'appeler et `couleure` est la couleure que vous vouler asigner au nom. Pour appeler votre nouvelle couleure il faut fair
```js
new rgb.nom();
```
ne metter pas `new rgb.nom()` metter `new rgb.leNomQueVousAvezChoisi()`

Il existe aussi d'autre class de ce genre tel que:
```js
new rgb.random(alpha)
```
renvera une couleure aleatoire, son paramatre (`alpha`) permet de presciser si l'on veut une alpha fixe à 1 ou aleatoire
```js
new rgb.copy(rgb) 
```
renvera une copy de l'instance de rgb passer en parametre

## proprieter

- ### red
    la valeure de rouge dand votre couleure

- ### green

    la valeure de vert dans votre couleure

- ### blue

    la valeure de bleu dans votre couleure

- ### alpha

    l'alpha de votre couleure (valeur comprise entre 0 et 1)

## getter

### value

la valeure, sous forme de string de votre couleure
ex:
```js
new rgb.red().value
```
renvera "rgb(255, 0, 0)"
```js
new rgb(255, 0, 0, 0.5).value
```
renvera "rgba(255, 0, 0, 0.5)"

### hex

la meme chose que value mais en hexadecimal

>Noter que hex ne comprend pas l'alpha.

## methodes

### <span style="color:rgb(97, 145, 255)">get</span>

#### <span style="color:#AA1111">deprecier utiliser le getter value. Mais fonctionelle</span>

la methode get sert a convertire notre instance de rgb en une string comprehensible par les navigateur et autre
syntax:
```js
new rgb.red().get()
```
renvera "rgba(255, 0, 0, 1)"
```js
new rgb.red().get(false)
```
renvara "rgb(255, 0, 0)"


### <span style="color:rgb(97, 145, 255)">brighter</span>

la methode brighter sert a eclairsire une couleure.
syntax:

```js
let rouge = new rgb.red(); 
```
assigne a la variable `rouge` une couleure rouge.
```js
rouge.value
```
renvera "rgb(255, 0, 0)"
```js
rouge.brighter().value
```
eclairsi la couleure de 20 (valeur par defaut) et renvoi "rgb(275, 20, 20)"
```js
let bleu = new rgb.blue();
```
asigne a la variable bleu une couleure bleu.
```js
bleu.value
```
renvera "rgb(0, 0, 255)"
```js
bleu.brighter(100).value
```
eclairsi la couleure de 100 et renvoi "rgb(100, 100, 355)"

>Noter que si les valeure ne plafone pas a 255 c'est que si on pourrait assombrire une couleure (avec la methode darker par exemple) se la donnerait un resultat embetant. exemple :
```js
let rouge = new rgb.red();
```
`rouge.value` serait donc "rgb(255, 0, 0)"
```js
rouge.brighter(20)
``` 
`rouge.value` deviendrait donc "rgb(255, 0, 0)" si cela plafonerait
```js
rouge.darker(20)
``` 
au final, `rouge.value` serait egale a "rgb(235, 0, 0)".

donc on a beau avoir eclairsi la couleure de 20 puis asombri la couleure de 20 on ne tombe pas sur la meme couleure, au depart "rgb(255, 0, 0)" et après "rgb(235, 0, 0)" alors que si ca ne plafonerait pas:
```js
let rouge = new rgb.red();
```
`rouge.value` serait donc "rgb(255, 0, 0)"
```js
rouge.brighter(20)
```
`rouge.value` deviendrait "rgb(275, 0, 0)"
```js
rouge.darker(20)
``` 
au final `rouge.value` vaut "rgb(255, 0, 0)", la meme chose qu'au debut.

### <span style="color:rgb(97, 145, 255)">darker</span>

la methode darker permet d'assombrire une couleure, syntax:

```js
let vert = new rgb.green();
```
asigne a la variable vert une couleure verte.
```js
vert.value
```
renvoi "rgb(0, 255, 0)"
```js
vert.darker()
vert.value
```
assombrie la couleure de 20 (valeure par defaut) et renvoi "rgb(-20, 235, -20)"
```js
vert.brighter();
vert.darker(100);
```
remet vert a sa valeure initial et l'assobrie de 100

>les valeures ne s'arrêtes pas a 0 pour les meme raison que les valeurees ne plafone pas a 255 avec brighter. Exemple rapide:
```
0, 255, 0
```
valeure initial
```
0, 235, 0
```
on assombri de 20 (si ca s'arretrai)
```
20, 255, 20
```
on eclairsi de 20
```
20, 255, 20
-----------
 0, 255, 0
```
au final ce n'est pas la memme couleure alors que si ca ne s'arrete pas :
```
0, 255, 0

-20, 235, -20

0, 255, 0

```
>Noter que si, les proprierter green, blue et red ne plafone pas a 255 et ne s'arrete pas a 0 avec le getter value la string rendu plafone a 255 et s'arrete a 0.

>## le getter value plafone a 255 et s'arrete a 0, si dans les exemple au desu ce n'est pas le cas c'est que ce n'est que pour expliquer.

#### si l'on a un red supperireure a 255 via le getter value il sera egale a 255.

### <span style="color:rgb(97, 145, 255)">invert</span>

le method invert sert a inverser la couleure
ex:
```js
let rouge = new rgb.red();
```
assigne a la variable `rouge` une couleure rouge.
```js
rouge.value
```
affiche "rgb(255, 0, 0)"
```js
rouge.invert().value
```
inverse la couleure et affiche "rgb(0, 255, 255)"

### <span style="color:rgb(97, 145, 255)">logColor</span>

la methode logColor affiche la couleure dans la console

```js
new rgb.red().logColor();
```
va donner, dans la console :
<div style="width:65px;background:red;border-radius:10px">
<br />
<br />
<br />
</div>

et
```js
new rgb.red().logColor('%cun petit message','color:blue');
```
va donner, dans la console :

<div style="width:65px;background:red;border-radius:10px">
<br />
<br />
<br />
</div>
<div style="color:blue">un petit message</div>

>Si les blocs rouge ne s'affiche pas bien c'est que votre "interpreteur" markdown

### <span style="color:rgb(97, 145, 255)">to</span>

la method to va permettre de "passer" d'un couleure a l'autre (comme une sorte de fondu)

```js
new rgb.red().to(couleur, pourcent);
```

ou `couleur` est la couleure vers la quelle vous vouler aller et `pourcent` est le pourcentage du changement vers la de couleure
ex:

```js
let rouge = new rgb.red();
let bleu = new rgb.blue();
```
assigne a la variable `rouge` une couleure rouge.
assigne a la variable `bleu` une couleure bleu.
```js
rouge.to(bleu, 50).logColor();
```
va afficher, dans la console
<div style="width:65px;background:rgb(125, 0, 125);border-radius:10px">
<br />
<br />
<br />
</div>

## rgb.help 

rgb.help est une method static permetant d'obtenir de l'aide sur certaine chose
>elle est en construction et donc ne possède pas beaucoup efficace

## rgb.config

rgb.config permet de configuré certainr chose,

- ### warn
    dis si rgb va alerter les action deprecier
- ### defaultColor
    la couleure par defaut utiliser quand `new rgb()` est appeler sans parametre, elle est parametreable en changent les proprieter red, green et blue
- ### defaultAlpha
    l'alpha utilser par default quand `new rgb()` est appeler sans parametre
- ### overWriteColor
    dis si lors d'un appel d'une method cette dernier va dirrectement modifier la couleure ou une copy pour ensuite retourné cette dernierre
- ### codeLogColor
    utiliser par help pour afficher une coloration syntaxique lors des exemple
    les modifier n'est pas conseiller et est inutile.