import PKG from './package.json';
import Block from './src/blockchain/block';

const { name, version } = PKG;
console.log(`${name} v${version}`);

const block = new Block(Date.now(), 'pr3vi0us-h4sh', 'h4sh', 'd4ta');
console.log(block.toString());



