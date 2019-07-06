import { NgModule } from '@angular/core';
import {InputDateComponent} from './inputs/input-date/input-date.component';
import { DatatableComponent } from './outputs/datatable/datatable.component';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {SdkProviders} from '../../../sdk-core/src/lib/providers';
import {SdkCoreModule} from '../../../sdk-core/src/lib/sdk-core.module';
import {FormsModule} from '@angular/forms';
import { InputTextComponent } from './inputs/input-text/input-text.component';
import { InputPasswordComponent } from './inputs/input-password/input-password.component';
import { InputPhoneComponent } from './inputs/input-phone/input-phone.component';
import { InputEmailComponent } from './inputs/input-email/input-email.component';
import { SelectClientComponent } from './inputs/select-client/select-client.component';
import {OutsideClickDirective} from './directives/outside-click/outside-click.directive';
import { SelectServerComponent } from './inputs/select-server/select-server.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    SdkCoreModule,
    FormsModule
  ],
  providers: [SdkProviders],
  declarations: [OutsideClickDirective, InputDateComponent, DatatableComponent, InputTextComponent, InputPasswordComponent, InputPhoneComponent, InputEmailComponent, SelectClientComponent, SelectServerComponent],
  exports: [OutsideClickDirective, InputDateComponent, DatatableComponent, InputTextComponent, InputPasswordComponent, InputPhoneComponent, InputEmailComponent, SelectClientComponent, SelectServerComponent]
})
export class SdkElementsModule { }
