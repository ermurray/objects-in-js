

const car = {
  name: '',
  model: '',
  make: '',
  drive: function() {
    return `I am driving the ${this.name} car`;
  }
}

const marty = new Object(car);

marty.name = 'Marty';
marty.model = 'amc';

console.log('marty car drive:', marty.drive());
const doc = new Object(car);

doc.name = 'Doc';


console.log('doc car drive', doc.drive());
