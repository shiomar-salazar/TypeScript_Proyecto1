import { Aprendiz, NivelEducativo } from "./aprendiz.js";
import { Curso } from "./curso.js";

let cursos = [new Curso("Practicas esenciales para el agilismo", 20, 90, true, 2019),
    new Curso("Ingenieria de Software para la Web", 30, 99, true, 2018),
    new Curso("Pruebas Automatizadas", 25, 50, false, 2020),
    new Curso("Principios de Diseño y Arquitectura", 30, 75, true, 2020)];

export const ap = new Aprendiz("Juan Pablo", "Reyes Gomez", "Recursos/avatar.png", 30, NivelEducativo.POSGRADO, cursos);

let aprendizTable:HTMLElement = document.getElementById("aprendiz")!;
let estadisticasTable:HTMLElement = document.getElementById("estadisticas")!;
let cursosTable:HTMLElement = document.getElementById("cursos")!;
let btnFiltro:HTMLElement = document.getElementById("botton-filtro")!;
let textoFiltro:HTMLInputElement = <HTMLInputElement>document.getElementById("texto-filtro")!;

btnFiltro.onclick = () => {
    let text:string = textoFiltro.value;
    text = (text == null)?"":text;
    cursosTable.getElementsByTagName("tbody")[0].remove();
    let cursosFiltrados: Curso[] = ap.cursos.filter(c => c.nombre.match(text));
    mostraCursosAprendiz(cursosFiltrados);
};

mostrarDatosAprediz(ap);
mostrarEstadisticas(ap);
mostraCursosAprendiz(ap.cursos);

function mostrarDatosAprediz(aprendiz: Aprendiz): void{
    let tbodyAprendiz:HTMLElement = document.createElement("tbody");
    tbodyAprendiz.innerHTML = `<tr><td colspan=2><img src="./${aprendiz.avatar}" height = "100"></td></tr>
        <tr><td>Nombres: <td><td>${aprendiz.nombres}</td></tr>
        <tr><td>Apellidos: <td><td>${aprendiz.apellidos}</td></tr>
        <tr><td>Nivel Educativo: <td><td>${aprendiz.niveleducativo}</td></tr>
        <tr><td>Edad: <td><td>${aprendiz.edad}</td></tr>`;
    aprendizTable.appendChild(tbodyAprendiz);    
}

function mostrarEstadisticas (aprendiz: Aprendiz):void{
    let trElement:HTMLElement = document.createElement("tr");
    trElement.innerHTML = `<td><b>Cursos Certificados</b></td>
        <td>${aprendiz.darCursosCertificados()}</td>`;
    estadisticasTable.appendChild(trElement);
}

function mostraCursosAprendiz( cursos:Curso[]):void {
    let cursosTbody:HTMLElement = document.createElement("tbody");
    for(let curso of cursos)
    {
        let trElement:HTMLElement = document.createElement("tr");
        trElement.innerHTML = `<td>${curso.nombre}</td>
            <td>${curso.horas}</td>
            <td>${curso.calificacion}</td>
            <td>${curso.certificado}</td>
            <td>${curso.anho}</td>`;
        cursosTbody.appendChild(trElement);
    }
    cursosTable.appendChild(cursosTbody);
}