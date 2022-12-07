

export default function Carousel2() {

const [page, setPage] = useState(1); // defino la pagina actual, y un estado que me setee la pagina actual 
const recipePage = 9; // defino cuantas recetas por pagina 
const lastPage = page * recipePage;  //pagina actual por la cantidad de recetas por pagina
const firstPage = lastPage - recipePage; //indice de la primera receta
const currentRecipes = recipes.slice(firstPage, lastPage);  //son las recetas de la pagina actual. //el slice corta un arreglo basado en lo que le pase por parametro 

const paginado = (numPage) => {  //seteo en la página en el numero de la pagina//esto me ayuda en el renderizado
    setPage(numPage);
};

return (

    <div>
        
    </div>
)


}
