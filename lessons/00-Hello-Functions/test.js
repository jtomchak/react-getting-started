import {assert, expect} from 'chai';
import 'mocha/mocha.css';

mocha.setup('bdd')

describe('Title Component', () => {
    let appNode;
    let app = () => document.getElementById('app');
    //reset appNode before each test
    beforeEach(() => {
        appNode = undefined
      });

    //renders child nodes to app div  
    it('should render to app id without exploding', () => {
        appNode = app();
       expect(appNode.childNodes).to.have.length(1);
    })

    it("should render 3 \'h1\' tags in the main \'div\'", () => {
        appNode = app();
        let htmlChildElements = appNode.firstElementChild.children;
        let h1Elements = [...htmlChildElements].filter(e => e.nodeName === 'H1');
        
        expect(h1Elements.length, "Totally missing some H1 Elments in the DIV, is your function returning anything?").to.equal(3);
    })

    it("each H1 element should have a color property set", () => {
        appNode = app();
        let htmlChildElements = appNode.firstElementChild.children;
        let h1Styles = [...htmlChildElements].filter(e => e.style.color)
        expect(h1Styles.length, "Seems to be missing some color styhle").to.equal(3);
    })

    it("each H1 element should have a title", () => {
        appNode = app();
        let htmlChildElements = appNode.firstElementChild.children;
        let h1Text = [...htmlChildElements].filter(e => e.innerHTML)
        expect(h1Text.length, "Seems to be missing some actual text in your H1\'s").to.equal(3);
    })
})


mocha.checkLeaks();
mocha.run();
