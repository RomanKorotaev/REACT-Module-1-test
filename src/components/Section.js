import PropTypes from 'prop-types';

//Чтобы вложенные компонентыб которые размещаем внутри двойных тегов, передавались сюда,
//нужно прописывать проп (prop) children
function Section({ title, children }) {
    return <div>
        {title && <h2>{title}</h2>}
        
        {children }
    </div>
}

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node
}

export default Section;