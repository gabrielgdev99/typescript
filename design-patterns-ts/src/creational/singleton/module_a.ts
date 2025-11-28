//FUNCTION
import { MyDatabaseFunction } from './db/my-database-function';

const myDatabaseClassic = MyDatabaseFunction;
myDatabaseClassic.add({ name: 'Gabriel', age: 25 });
myDatabaseClassic.add({ name: 'Rodnei', age: 20 });
myDatabaseClassic.add({ name: 'Vagner', age: 30 });

export { myDatabaseClassic };


/*

MODULE

import { MyDatabaseModule } from './db/my-database-module';

const myDatabaseClassic = MyDatabaseModule;
myDatabaseClassic.add({ name: 'Gabriel', age: 25 });
myDatabaseClassic.add({ name: 'Rodnei', age: 20 });
myDatabaseClassic.add({ name: 'Vagner', age: 30 });

export { myDatabaseClassic };

*/

/*

CLASSIC

import { MyDatabaseClassic } from './db/my-database-classic';

const myDatabaseClassic = MyDatabaseClassic.instance;
myDatabaseClassic.add({ name: 'Gabriel', age: 25 });
myDatabaseClassic.add({ name: 'Rodnei', age: 20 });
myDatabaseClassic.add({ name: 'Vagner', age: 30 });

export { myDatabaseClassic };

*/
