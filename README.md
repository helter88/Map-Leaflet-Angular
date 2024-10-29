# Map-Leaflet-Angular
Showing how to implement basic OpenStreetMap 

1. Dodać zależności:
- npm install leaflet @asymmetrik/ngx-leaflet
- npm install leaflet-control-geocoder (gdy chcemy wyszukiwać ulice)
- npm install npm install @types/leaflet
  
2. dodać style do angular.json:
'''ts
"styles": [
  "node_modules/leaflet/dist/leaflet.css",
  "node_modules/leaflet-control-geocoder/dist/Control.Geocoder.css"
]
 '''

3. Dodać LeafletModule do importów w app.module.ts:
'''ts
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

@NgModule({
  imports: [
    LeafletModule
  ]
})
 '''
 4. Dodać odpowiedni kod w html ts i scss
