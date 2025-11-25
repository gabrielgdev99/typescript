// Encadeamento opcional e Operador de coalescência nula

//Colocar o ? é o encadeamento opcional | Colocar o ?? é o operador de coalescência nula

type Documento = {
  title: string;
  text: string;
  date?: Date;
};

const documento: Documento = {
  title: 'The Title',
  text: 'The Text',
  date: new Date(),
};

console.log(documento.date?.toDateString() ?? 'Date unexist');
console.log(undefined ?? '1-Test')
console.log(null ?? '2-Test')
console.log(false ?? '3-Test')
console.log(0 ?? '3-Test')
