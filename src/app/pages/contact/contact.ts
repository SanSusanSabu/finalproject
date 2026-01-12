import { Component } from '@angular/core';
import { Navbar } from "../../component/navbar/navbar";
import { Footer } from "../../component/footer/footer";
import { Cardo } from "./cardo/cardo";
import { Form } from "../../component/form/form";

@Component({
  selector: 'app-contact',
  imports: [Navbar, Footer, Cardo, Form],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {

}
