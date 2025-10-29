import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {
  private livros: Array<Livro> = [];

  constructor() {
    const livro1 = new Livro();
    livro1.codigo = 1;
    livro1.codEditora = 1;
    livro1.titulo = 'Clean Code';
    livro1.resumo = 'Livro sobre boas práticas de programação';
    livro1.autores = ['Robert C. Martin'];

    const livro2 = new Livro();
    livro2.codigo = 2;
    livro2.codEditora = 2;
    livro2.titulo = 'O Poder do Hábito';
    livro2.resumo = 'Como os hábitos moldam nossas vidas';
    livro2.autores = ['Charles Duhigg'];

    const livro3 = new Livro();
    livro3.codigo = 3;
    livro3.codEditora = 3;
    livro3.titulo = '1984';
    livro3.resumo = 'Distopia clássica sobre vigilância e controle';
    livro3.autores = ['George Orwell'];

    this.livros = [livro1, livro2, livro3];
  }

  obterLivros(): Array<Livro> {
    return this.livros;
  }

  incluir(livro: Livro): void {
    const novoCodigo = this.livros.length > 0 ? Math.max(...this.livros.map(l => l.codigo)) + 1 : 1;
    livro.codigo = novoCodigo;
    this.livros.push(livro);
  }

  excluir(codigo: number): void {
    const index = this.livros.findIndex(l => l.codigo === codigo);
    if (index !== -1) {
      this.livros.splice(index, 1);
    }
  }
}