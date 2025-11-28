//FUNCTION
import { MyDatabaseFunction } from './db/my-database-function';
import { myDatabaseClassic as myDatabaseFromModuleA } from './module_a';

const myDatabaseClassic = MyDatabaseFunction;
myDatabaseClassic.add({ name: 'Osvaldo', age: 28 });
myDatabaseClassic.add({ name: 'Maria', age: 21 });
myDatabaseClassic.add({ name: 'Paulo', age: 39 });
myDatabaseClassic.show();

console.log(myDatabaseClassic === myDatabaseFromModuleA);

/*

MODULE

import { MyDatabaseModule } from './db/my-database-module';
import { myDatabaseClassic as myDatabaseClassicFromModuleA } from './module_a';

const myDatabaseClassic = MyDatabaseModule;
myDatabaseClassic.add({ name: 'Osvaldo', age: 28 });
myDatabaseClassic.add({ name: 'Maria', age: 21 });
myDatabaseClassic.add({ name: 'Paulo', age: 39 });
myDatabaseClassic.show();

console.log(myDatabaseClassic === myDatabaseClassicFromModuleA);
*/

/*

CLASSIC

import { MyDatabaseClassic } from './db/my-database-classic';
import { myDatabaseClassic as myDatabaseClassicFromModuleA } from './module_a';

const myDatabaseClassic = MyDatabaseClassic.instance;
myDatabaseClassic.add({ name: 'Osvaldo', age: 28 });
myDatabaseClassic.add({ name: 'Maria', age: 21 });
myDatabaseClassic.add({ name: 'Paulo', age: 39 });
myDatabaseClassic.show();

console.log(myDatabaseClassic === myDatabaseClassicFromModuleA);

*/
