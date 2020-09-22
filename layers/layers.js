var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Sectores_1 = new ol.format.GeoJSON();
var features_Sectores_1 = format_Sectores_1.readFeatures(json_Sectores_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sectores_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sectores_1.addFeatures(features_Sectores_1);
var lyr_Sectores_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sectores_1, 
                style: style_Sectores_1,
                interactive: true,
                title: '<img src="styles/legend/Sectores_1.png" /> Sectores'
            });
var format_Manzanas_Catastrales_1_2 = new ol.format.GeoJSON();
var features_Manzanas_Catastrales_1_2 = format_Manzanas_Catastrales_1_2.readFeatures(json_Manzanas_Catastrales_1_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Manzanas_Catastrales_1_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Manzanas_Catastrales_1_2.addFeatures(features_Manzanas_Catastrales_1_2);
var lyr_Manzanas_Catastrales_1_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Manzanas_Catastrales_1_2, 
                style: style_Manzanas_Catastrales_1_2,
                interactive: true,
    title: 'Manzanas_Catastrales_1<br />\
    <img src="styles/legend/Manzanas_Catastrales_1_2_0.png" /> SECTOR 1<br />\
    <img src="styles/legend/Manzanas_Catastrales_1_2_1.png" /> SECTOR 18<br />\
    <img src="styles/legend/Manzanas_Catastrales_1_2_2.png" /> SECTOR 2<br />\
    <img src="styles/legend/Manzanas_Catastrales_1_2_3.png" /> SECTOR 3<br />\
    <img src="styles/legend/Manzanas_Catastrales_1_2_4.png" /> SECTOR 4<br />\
    <img src="styles/legend/Manzanas_Catastrales_1_2_5.png" /> SECTOR 7<br />\
    <img src="styles/legend/Manzanas_Catastrales_1_2_6.png" /> SECTOR 8<br />\
    <img src="styles/legend/Manzanas_Catastrales_1_2_7.png" /> <br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_Sectores_1.setVisible(true);lyr_Manzanas_Catastrales_1_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Sectores_1,lyr_Manzanas_Catastrales_1_2];
lyr_Sectores_1.set('fieldAliases', {'Cod_Sector': 'Cod_Sector', 'Area': 'Area', 'perimetro': 'perimetro', 'numero': 'numero', 'Imagen': 'Imagen', 'Imagen_': 'Imagen_', });
lyr_Manzanas_Catastrales_1_2.set('fieldAliases', {'Cod_m': 'Cod_m', 'Cod_Sector': 'Cod_Sector', });
lyr_Sectores_1.set('fieldImages', {'Cod_Sector': 'TextEdit', 'Area': 'TextEdit', 'perimetro': 'TextEdit', 'numero': 'TextEdit', 'Imagen': 'Hidden', 'Imagen_': 'ExternalResource', });
lyr_Manzanas_Catastrales_1_2.set('fieldImages', {'Cod_m': 'Hidden', 'Cod_Sector': 'Hidden', });
lyr_Sectores_1.set('fieldLabels', {'Cod_Sector': 'header label', 'Area': 'inline label', 'perimetro': 'header label', 'numero': 'no label', 'Imagen_': 'no label', });
lyr_Manzanas_Catastrales_1_2.set('fieldLabels', {});
lyr_Manzanas_Catastrales_1_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});