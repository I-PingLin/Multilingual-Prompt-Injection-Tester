
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PromptInjectorComponent } from './components/prompt-injector/prompt-injector.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PromptInjectorComponent]
})
export class AppComponent {}
