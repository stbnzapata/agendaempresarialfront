
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import Buscador from '../Components/buscador';

it('should have an `input` element', () => {
    const wrapper = shallow(
        <Buscador />
    );
    expect(
        wrapper.containsMatchingElement(
            <input />
        )
    ).toBe(true);
});

it('should have an `button` "Buscar" element', () => {
    const wrapper = shallow(
        <Buscador />
    );
    expect(
        wrapper.containsMatchingElement(
            <button>Buscar</button>
        )
    ).toBe(true);
});

it('should have an `button` "Ingresar" element', () => {
    const wrapper = shallow(
        <Buscador />
    );
    expect(
        wrapper.containsMatchingElement(
            <button>Ingresar</button>
        )
    ).toBe(true);
});

it('should have an `h1` "Title" element', () => {
    const wrapper = shallow(
        <Buscador />
    );
    expect(
        wrapper.containsMatchingElement(
            <h1>Crear Contacto</h1>
        )
    ).toBe(true);
});