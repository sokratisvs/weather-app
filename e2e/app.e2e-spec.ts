import { WeatherApp1Page } from './app.po';

describe('weather-app1 App', () => {
  let page: WeatherApp1Page;

  beforeEach(() => {
    page = new WeatherApp1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
