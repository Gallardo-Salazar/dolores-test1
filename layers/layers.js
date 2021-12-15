var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_NDVI_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "NDVI",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/NDVI_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-11410459.265705, 2368503.552328, -11409905.006117, 2369253.164132]
                            })
                        });
var format_Zonasporvigor_2 = new ol.format.GeoJSON();
var features_Zonasporvigor_2 = format_Zonasporvigor_2.readFeatures(json_Zonasporvigor_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zonasporvigor_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zonasporvigor_2.addFeatures(features_Zonasporvigor_2);
var lyr_Zonasporvigor_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Zonasporvigor_2, 
                style: style_Zonasporvigor_2,
                interactive: true,
    title: 'Zonas por vigor<br />\
    <img src="styles/legend/Zonasporvigor_2_0.png" /> 0.613 - 0.672<br />\
    <img src="styles/legend/Zonasporvigor_2_1.png" /> 0.672 - 0.707<br />\
    <img src="styles/legend/Zonasporvigor_2_2.png" /> 0.707 - 0.725<br />\
    <img src="styles/legend/Zonasporvigor_2_3.png" /> 0.725 - 0.769<br />'
        });
var format_Tablas_3 = new ol.format.GeoJSON();
var features_Tablas_3 = format_Tablas_3.readFeatures(json_Tablas_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tablas_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tablas_3.addFeatures(features_Tablas_3);
var lyr_Tablas_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Tablas_3, 
                style: style_Tablas_3,
                interactive: true,
                title: '<img src="styles/legend/Tablas_3.png" /> Tablas'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_NDVI_1.setVisible(true);lyr_Zonasporvigor_2.setVisible(false);lyr_Tablas_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_NDVI_1,lyr_Zonasporvigor_2,lyr_Tablas_3];
lyr_Zonasporvigor_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'ndvimean': 'ndvimean', });
lyr_Tablas_3.set('fieldAliases', {'id': 'id', 'Año': 'Año', 'Sup (ha)': 'Sup (ha)', });
lyr_Zonasporvigor_2.set('fieldImages', {'fid': '', 'id': '', 'left': '', 'top': '', 'right': '', 'bottom': '', 'ndvimean': '', });
lyr_Tablas_3.set('fieldImages', {'id': '', 'Año': '', 'Sup (ha)': '', });
lyr_Zonasporvigor_2.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'left': 'no label', 'top': 'no label', 'right': 'no label', 'bottom': 'no label', 'ndvimean': 'no label', });
lyr_Tablas_3.set('fieldLabels', {'id': 'inline label', 'Año': 'inline label', 'Sup (ha)': 'inline label', });
lyr_Tablas_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});