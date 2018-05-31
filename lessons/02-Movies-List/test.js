import {assert} from 'chai';
import 'mocha/mocha.css';

mocha.setup('bdd')


mocha.checkLeaks();
mocha.run();
