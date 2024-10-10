var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Test_1 = new ol.format.GeoJSON();
var features_Test_1 = format_Test_1.readFeatures(json_Test_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Test_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Test_1.addFeatures(features_Test_1);
var lyr_Test_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Test_1, 
                style: style_Test_1,
                popuplayertitle: "Test",
                interactive: true,
                title: '<img src="styles/legend/Test_1.png" /> Test'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Test_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Test_1];
lyr_Test_1.set('fieldAliases', {'ď»żloca': 'ď»żloca', 'locality': 'locality', 'decimalLat': 'decimalLat', 'decimalLon': 'decimalLon', 'geodeticDa': 'geodeticDa', 'coordinate': 'coordinate', 'coordina_1': 'coordina_1', 'pointRadiu': 'pointRadiu', 'footprintW': 'footprintW', 'footprintS': 'footprintS', 'footprin_1': 'footprin_1', 'georeferen': 'georeferen', 'georefer_1': 'georefer_1', 'georefer_2': 'georefer_2', 'georefer_3': 'georefer_3', 'georefer_4': 'georefer_4', 'shareLink': 'shareLink', });
lyr_Test_1.set('fieldImages', {'ď»żloca': '', 'locality': '', 'decimalLat': '', 'decimalLon': '', 'geodeticDa': '', 'coordinate': '', 'coordina_1': '', 'pointRadiu': '', 'footprintW': '', 'footprintS': '', 'footprin_1': '', 'georeferen': '', 'georefer_1': '', 'georefer_2': '', 'georefer_3': '', 'georefer_4': '', 'shareLink': '', });
lyr_Test_1.set('fieldLabels', {'ď»żloca': 'no label', 'locality': 'no label', 'decimalLat': 'no label', 'decimalLon': 'no label', 'geodeticDa': 'no label', 'coordinate': 'no label', 'coordina_1': 'no label', 'pointRadiu': 'no label', 'footprintW': 'no label', 'footprintS': 'no label', 'footprin_1': 'no label', 'georeferen': 'no label', 'georefer_1': 'no label', 'georefer_2': 'no label', 'georefer_3': 'no label', 'georefer_4': 'no label', 'shareLink': 'no label', });
lyr_Test_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});