sap.ui.define(["sap/ui/core/mvc/Controller"],function(n){
	"use strict";
	return n.extend("transener.mapaincendio.controller.Main",{

		onInit:function(){

		},

		getheatmapPointsModel: function (){
	    	var that = this;
	    	var heatmapPointsModel = new sap.ui.model.json.JSONModel();
			heatmapPointsModel.loadData("model/heatmapPoints.json", false);

			that.getView().setModel(heatmapPointsModel, "heatmapPointsModel");
			heatmapPointsModel.attachRequestCompleted(function() {

		        return heatmapPointsModel.getData();
		    });
	    },

		onAfterRendering: function(){

			this.getheatmapPointsModel();
			this.initMap2();

		},

		initMap2: function(){

			//console.log( $.sap.MAPA );
			var MAPA = this.getheatmapPointsModel();
			console.log(MAPA);


			mapboxgl.accessToken = 'pk.eyJ1IjoibWF0dGNhbXBhIiwiYSI6ImNqeWlzZWx3dTBkcm8zZHA1czJ4bnNuamQifQ.XZwmyx7JwQ0RLIgQlpJb1g';
			var map = new mapboxgl.Map({
				container: 'container-mapaincendio---Main--mapContainer',
				style: 'mapbox://styles/mapbox/streets-v11',
				center: [-60.90173,-33.30103],
				zoom: 6
			});

			map.on('load', function () {

				map.addLayer(
					{
						"id": "heatmapPoints",
						"type": "symbol",
						"source": {
							"type": "geojson",
							"data": {
								"type": "FeatureCollection",
								"features": [
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.08845434,
									        -32.68850576
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.1
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.79811434,
									        -34.22450004
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.8
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.445054,
									        -31.96204284
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.5
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.41561334,
									        -33.34379237
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.1
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.8889704,
									        -33.30602979
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.3
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.34039221,
									        -34.99712065
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.4
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.25803246,
									        -34.79209571
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.7
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.59741899,
									        -34.14521355
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.6
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -63.1783205,
									        -33.03690852
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.7
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.20466302,
									        -31.9494136
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.5
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.74531949,
									        -32.20734868
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.5
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.1428254,
									        -33.28306692
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.9
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.09774638,
									        -35.10770139
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.1
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.98516044,
									        -34.74154466
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.3
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.69831371,
									        -34.87448986
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.5
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.57353151,
									        -35.01472249
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.1
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.18089442,
									        -35.0431173
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.9
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.18283386,
									        -32.96488678
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.1
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.60380181,
									        -34.1923487
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.8
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.520301,
									        -34.85048877
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.2
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -58.94457918,
									        -35.20225777
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.5
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -63.24014024,
									        -32.82275413
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.8
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.69863327,
									        -31.8983299
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.8
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.62327022,
									        -31.92118063
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.2
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.08911073,
									        -31.85364896
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.6
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.28436933,
									        -32.60249077
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.9
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.16122711,
									        -31.89122185
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.4
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.34349784,
									        -32.02069973
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.5
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.86307286,
									        -32.82429689
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.3
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.53765072,
									        -32.16864198
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.7
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.3511576,
									        -33.43136377
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.2
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.52258797,
									        -32.06770041
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.8
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -63.30741281,
									        -32.70513304
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.4
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.50713718,
									        -34.08512811
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.2
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.64279309,
									        -33.76130466
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.3
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.76541082,
									        -32.09646818
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.6
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.59483329,
									        -34.09513203
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.9
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -58.76544486,
									        -32.60238266
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.4
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.77238637,
									        -32.94523746
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.1
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.20293769,
									        -33.34638876
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.2
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -58.9270041,
									        -32.55641369
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.7
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.0361985,
									        -35.03665461
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.7
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.48994953,
									        -32.9344059
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.9
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.33216111,
									        -33.58311682
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.7
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.63676479,
									        -32.35344253
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.8
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.12278952,
									        -33.61382148
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.2
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.51986602,
									        -32.14244417
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.1
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.29071784,
									        -32.08934757
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.6
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.44509431,
									        -33.06519459
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.9
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -58.86623324,
									        -32.51185102
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.8
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -58.81479673,
									        -34.52301869
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.5
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.48677398,
									        -34.67370443
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.1
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -58.93435292,
									        -33.47003088
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.8
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.03071192,
									        -32.16652542
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.9
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.7877759,
									        -32.49902415
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.5
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.84601097,
									        -32.15511852
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.5
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.92154252,
									        -32.75086356
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.1
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -58.90901278,
									        -32.52487729
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.8
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.95061524,
									        -34.74572366
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.9
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -63.20023632,
									        -33.21064182
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.1
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.73130534,
									        -33.19868637
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.8
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.15054379,
									        -32.63717954
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.3
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.92257857,
									        -33.19746443
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.7
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.60900337,
									        -32.01732408
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.8
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.88067746,
									        -31.98788979
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.8
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.55527081,
									        -34.4729801
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.9
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -58.86971282,
									        -34.17171509
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.9
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.25976412,
									        -32.37857604
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.4
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.5424073,
									        -33.64177496
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.1
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -63.35511903,
									        -34.15067223
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.5
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -58.9917068,
									        -32.97965391
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.8
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.97356845,
									        -34.79838169
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.8
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.34748802,
									        -32.23966809
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.3
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.05354061,
									        -33.07439419
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.6
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.35087476,
									        -35.02606258
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.8
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.01946615,
									        -34.37140451
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.4
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.61613244,
									        -35.23931461
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.6
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.52779528,
									        -31.96103794
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.5
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -58.71111054,
									        -35.1283832
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.3
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.9780886,
									        -32.96174894
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.3
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -58.90710214,
									        -32.85904498
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.4
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -63.3867582,
									        -33.52378368
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.8
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.33218356,
									        -33.09809017
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.2
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.23306046,
									        -34.05940707
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.3
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.02128052,
									        -34.20683327
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.2
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.76598435,
									        -32.22546951
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.4
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -63.41486135,
									        -32.32846708
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.7
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.55692351,
									        -32.09795919
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.6
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -58.84993112,
									        -33.27953027
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.9
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.9438686,
									        -33.38599359
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.4
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.95092588,
									        -34.8029634
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.1
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.03252482,
									        -33.82587564
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.6
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.25785243,
									        -32.31536873
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.4
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.60990341,
									        -33.34171595
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.4
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.95337055,
									        -34.21752132
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.3
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.26867528,
									        -32.10778451
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.4
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.98193134,
									        -33.79431453
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.6
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.86611123,
									        -32.3576829
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.5
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -58.94575107,
									        -33.06012007
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.1
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -58.95752674,
									        -35.17943361
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.2
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.81050214,
									        -34.30066377
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.9
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.26519879,
									        -34.46258588
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.2
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.65637447,
									        -32.06359524
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.7
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.07615357,
									        -34.99397733
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.2
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.61121376,
									        -33.95584542
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.6
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.50500134,
									        -32.1187976
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.2
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.04445964,
									        -34.09684798
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.3
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -63.32832994,
									        -33.72842875
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.3
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.17018259,
									        -32.11622151
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.7
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.59290378,
									        -33.37151029
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.2
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.53376719,
									        -33.17013348
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.5
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -63.39643872,
									        -33.94172934
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.8
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.19007894,
									        -34.90634553
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.3
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.41821418,
									        -33.23301327
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.5
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -63.06952074,
									        -33.78042019
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.8
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.65957655,
									        -32.46893273
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.7
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.7607787,
									        -33.04002448
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.2
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.98430765,
									        -35.02814269
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.6
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -58.75266821,
									        -33.35644315
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.1
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -63.0805851,
									        -33.77115486
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.6
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.83919474,
									        -34.26680968
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.3
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.44318503,
									        -33.99630138
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.9
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.28401384,
									        -35.2097935
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.2
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.43115265,
									        -32.93710209
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.9
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.08281942,
									        -34.94215754
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.9
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.86798295,
									        -34.59931394
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.3
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.82159634,
									        -33.84602923
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.4
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.94399872,
									        -34.42589373
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.1
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.329861,
									        -34.12594423
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.9
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.27962667,
									        -33.28988092
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.3
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.44723746,
									        -33.8651792
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.6
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.79654373,
									        -34.89283998
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.7
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -63.37887601,
									        -33.10517088
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.9
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.81843251,
									        -34.31250992
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.5
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.85952856,
									        -32.99210812
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.5
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.22363963,
									        -33.29223284
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.9
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -63.26712245,
									        -31.85856258
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.3
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.74389429,
									        -34.12208806
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.9
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.36110365,
									        -33.27595195
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.7
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.08259954,
									        -32.86388113
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.4
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.59501699,
									        -34.09607194
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.6
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.79288011,
									        -33.93557334
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.3
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.84179099,
									        -34.93385842
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.8
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.19374957,
									        -32.73385271
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.9
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.80864607,
									        -32.40347588
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.1
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.42243558,
									        -32.85343995
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.3
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.83000177,
									        -34.7918483
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.2
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.14839733,
									        -32.50376907
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.3
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.22862409,
									        -33.75678655
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.6
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.37395805,
									        -34.11380662
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.8
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.55912282,
									        -32.32486514
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.1
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.38237228,
									        -35.18086656
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.8
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.48489835,
									        -33.20494863
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.4
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.6350194,
									        -34.86537726
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.8
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -63.21891476,
									        -32.66422977
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.9
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -58.76760853,
									        -35.09694357
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.8
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -63.20444782,
									        -34.28504263
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.3
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.02031279,
									        -33.80620628
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.9
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.89214642,
									        -31.96073567
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.2
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.81493968,
									        -34.82835404
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.2
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.36178265,
									        -33.80634181
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.9
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -58.77805587,
									        -34.93198763
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.2
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.23228629,
									        -34.09971073
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.1
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -63.36891384,
									        -33.82861862
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.6
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.02839946,
									        -34.32388181
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.4
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.08375248,
									        -33.48800766
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.5
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.51231202,
									        -34.18010593
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.9
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -58.87693623,
									        -32.82479916
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.2
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.82556485,
									        -33.32683872
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.6
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -63.36679385,
									        -32.99915459
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.3
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.41344952,
									        -32.6180955
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.3
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -58.86499561,
									        -32.94867804
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.9
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -63.23679286,
									        -32.86529242
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.8
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.82368847,
									        -33.51814919
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.5
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -58.82705458,
									        -32.43519915
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.7
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -58.66558801,
									        -33.34218512
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.2
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.65907381,
									        -33.74821273
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.9
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -58.80038944,
									        -31.87447323
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.2
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.30686075,
									        -34.77104731
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.8
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -58.85840635,
									        -32.16806688
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.3
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.72349272,
									        -33.75688412
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.2
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.94256881,
									        -35.2475272
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.3
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -63.33781996,
									        -34.37611227
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.4
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.96380796,
									        -32.54050803
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.8
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.17269969,
									        -33.39342381
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.8
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.87969397,
									        -32.30051382
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.6
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.22948428,
									        -34.44352903
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.4
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.49535371,
									        -34.95894288
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.4
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.5975011,
									        -34.84495194
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.3
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.5719048,
									        -33.30147472
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.9
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.81218497,
									        -32.61672952
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.9
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.960566,
									        -34.95547899
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.1
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.85243755,
									        -32.69690281
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.8
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.73592592,
									        -32.57945463
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.9
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.06327246,
									        -34.26307057
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.6
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.55598976,
									        -33.23661147
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.5
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.78222158,
									        -33.33968123
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.5
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.73372474,
									        -33.61306321
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.2
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.92189982,
									        -33.07871311
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.9
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.3105917,
									        -32.99628334
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.6
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.95060618,
									        -34.19191947
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.5
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.88604581,
									        -34.76894008
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.6
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.86888542,
									        -33.14960738
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.9
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.3247696,
									        -34.94839033
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.4
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -63.16382019,
									        -33.8094614
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.1
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.35375698,
									        -33.01147386
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.6
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.90928612,
									        -34.520533
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.5
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.73523331,
									        -34.75749543
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.4
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.41892825,
									        -32.79349978
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.3
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.23179241,
									        -31.9182529
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.2
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.35466421,
									        -33.20621683
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.5
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.2658917,
									        -32.34671796
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.2
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.28336461,
									        -35.03527373
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.6
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -63.30084462,
									        -32.01108067
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.1
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.18048064,
									        -33.23597481
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.3
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -58.98333798,
									        -32.71256776
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.1
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.30578701,
									        -32.91738253
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.3
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.18086049,
									        -33.26610491
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.1
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.49399348,
									        -34.46041886
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.1
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.78563203,
									        -33.81384088
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.9
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.1214856,
									        -34.27864191
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.7
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.61165865,
									        -34.00292866
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.6
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.26054771,
									        -34.19534868
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.7
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.9281267,
									        -32.24200349
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.2
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.32949777,
									        -34.59695794
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.6
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.05584474,
									        -33.83144603
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.1
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.18319769,
									        -32.50564489
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.5
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.26854779,
									        -32.92814162
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.6
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.49818204,
									        -32.26275402
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.6
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.13361022,
									        -34.36359975
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.4
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.1427254,
									        -33.57293104
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.9
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.60643496,
									        -33.21747327
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.3
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.99790303,
									        -32.88022114
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.1
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.54365874,
									        -33.86861188
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.4
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.21824321,
									        -32.57987431
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.7
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.38291683,
									        -33.874006
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.4
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.93108724,
									        -32.80024125
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.3
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.42342647,
									        -33.6343478
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.3
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.14717389,
									        -32.87717617
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.9
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -63.19272128,
									        -34.59820249
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.4
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.85695875,
									        -32.02050373
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.4
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -58.79495506,
									        -32.84852922
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.7
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.96299239,
									        -34.75402499
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.1
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.74066933,
									        -32.87745561
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.8
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.43906923,
									        -33.15426701
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.3
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -63.08388048,
									        -34.33898978
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.9
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.48501652,
									        -31.87885708
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.6
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.59413717,
									        -34.23880199
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.1
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.01593984,
									        -32.72652634
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.8
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.31337955,
									        -32.68745889
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.1
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.67894778,
									        -34.52830605
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.2
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -58.72399308,
									        -32.79876922
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.6
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.96196477,
									        -32.09706371
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.4
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.49464535,
									        -32.48280204
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.8
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.20708771,
									        -31.99947597
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.5
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.82303509,
									        -35.15201129
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.2
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.99862617,
									        -33.1304735
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.6
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.21945203,
									        -33.48258156
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.8
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.71803671,
									        -33.54588114
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.2
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.42641587,
									        -32.11195513
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.4
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.95854205,
									        -32.84527954
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.9
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -63.36929846,
									        -34.23599485
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.4
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.36320823,
									        -34.62006169
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.6
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.94173137,
									        -34.15073107
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.7
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.0838086,
									        -34.88008924
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.3
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.58038395,
									        -32.90374702
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.8
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.47337933,
									        -34.1255776
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.5
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.76859643,
									        -34.93552802
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.9
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.05529361,
									        -34.33362985
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.6
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.51687126,
									        -33.36418985
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.2
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -58.67750419,
									        -34.55772156
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.3
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.54465768,
									        -34.45105983
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.6
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.87577514,
									        -32.45341269
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.4
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.05200248,
									        -33.58776153
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.2
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.45871939,
									        -34.01952742
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.4
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.70991762,
									        -34.14830243
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.2
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.87421545,
									        -33.03557856
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.7
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.36006855,
									        -33.9310521
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.7
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.50576548,
									        -35.07579549
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.2
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.99745171,
									        -32.10674858
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.5
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.86615426,
									        -33.14840813
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.9
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.79927468,
									        -34.77216382
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.2
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.0115031,
									        -33.10767466
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.2
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.99483883,
									        -32.58885078
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.1
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.15859654,
									        -35.19871051
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.8
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.72756582,
									        -33.7905882
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.3
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.90156265,
									        -33.30127578
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.4
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.56541801,
									        -33.89749848
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.6
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.34841652,
									        -34.59571859
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.6
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.79577007,
									        -31.8522434
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.6
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.13980564,
									        -32.10042092
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.2
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.28921522,
									        -33.69299892
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.2
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.447341,
									        -34.37103522
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.2
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.5817742,
									        -34.28924203
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.1
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.51749321,
									        -32.9811647
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.3
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.29885596,
									        -33.30496614
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.1
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -63.16787289,
									        -34.46016836
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.4
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.81928297,
									        -34.72825192
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.3
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.88284641,
									        -33.72105465
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.9
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.84524254,
									        -31.93731196
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.1
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -63.11561511,
									        -35.16991135
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.1
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.71272163,
									        -32.11034047
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.9
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.72679859,
									        -34.34247593
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.7
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -58.72273632,
									        -33.04843999
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.8
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.01771453,
									        -32.04548148
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.7
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.35560703,
									        -34.50656415
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.2
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.21192191,
									        -32.85898571
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.6
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.26070503,
									        -32.12741851
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.1
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.88970942,
									        -32.99888206
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.5
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.48191343,
									        -33.17423963
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.6
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.59874734,
									        -32.62770083
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.8
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.49779572,
									        -32.94855799
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.1
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -58.97411769,
									        -33.25654059
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.2
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.114414,
									        -32.98669022
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.2
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.55186939,
									        -32.12755662
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.4
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.62453796,
									        -33.83564161
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.9
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.08778714,
									        -32.36302626
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.8
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.29268933,
									        -32.1701885
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.9
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.46374586,
									        -31.84852468
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.7
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -63.28197984,
									        -34.07747404
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.6
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.3833576,
									        -32.66801909
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.2
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -58.82066421,
									        -34.13455785
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.8
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.3707606,
									        -32.35368042
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.1
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.56976098,
									        -34.03827047
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.2
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.7340343,
									        -34.75412092
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.5
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.99680366,
									        -34.45579066
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.5
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.01522115,
									        -34.71750848
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.8
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.54128472,
									        -32.63636652
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.7
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.14425846,
									        -32.3122794
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.6
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.69872124,
									        -33.74590566
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.8
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.48029899,
									        -32.16563058
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.6
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.28454023,
									        -32.00755687
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.3
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -58.80928279,
									        -32.26719947
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.1
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.4906363,
									        -33.77783739
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.2
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.49370059,
									        -31.91980411
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.4
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.62089787,
									        -33.16808922
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.6
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.96496471,
									        -33.91988893
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.2
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.79315797,
									        -33.91258672
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.3
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -63.27996257,
									        -32.94892822
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.5
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.56052084,
									        -32.73780421
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.2
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.29874415,
									        -33.42247325
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.2
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.83635749,
									        -33.61889044
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.6
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.77182947,
									        -32.74450413
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.1
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.31916738,
									        -32.51077305
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.8
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -63.30935472,
									        -33.2027843
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.6
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.99945616,
									        -34.40840996
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.9
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.76943796,
									        -34.95951084
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.1
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.4580458,
									        -32.82597329
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.2
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.32354183,
									        -33.93453958
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.5
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.82213317,
									        -32.81495431
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.4
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.75103613,
									        -34.33070266
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.8
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.00221368,
									        -35.08875054
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.3
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -58.75759001,
									        -33.15205
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.3
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.28841775,
									        -32.27124033
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.3
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.3766658,
									        -31.8492527
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.4
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.17551915,
									        -34.872207
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.6
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.03333722,
									        -34.06875825
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.4
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.3000068,
									        -35.0014101
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.2
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -58.74724024,
									        -34.1209194
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.2
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -58.97176754,
									        -34.76744203
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.5
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.16614969,
									        -32.2701191
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.7
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -58.67652076,
									        -32.73142444
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.3
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.59498484,
									        -32.73802642
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.8
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.33902173,
									        -34.68626968
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.2
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.64459596,
									        -32.48343532
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.8
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.68913793,
									        -33.76840701
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.6
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.54545004,
									        -34.89668828
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.4
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.55525118,
									        -33.57240542
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.5
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.42370833,
									        -34.95453306
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.3
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.68942964,
									        -33.16643186
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.1
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -58.86715154,
									        -33.63861115
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.4
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.85807273,
									        -33.66495846
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.2
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.85674242,
									        -35.1473771
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.9
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.32556756,
									        -32.73182238
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.8
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.49376237,
									        -32.90444092
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.4
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.26298203,
									        -34.17059188
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.7
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -63.35416294,
									        -32.79272854
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.6
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.59053567,
									        -34.67135538
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.6
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.86936643,
									        -34.98241667
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.2
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.53871858,
									        -33.48607574
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.1
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -58.86923394,
									        -35.22503618
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.3
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.29535296,
									        -32.27240134
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.3
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.51176353,
									        -34.40071348
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.8
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.12010581,
									        -31.91867695
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.5
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -58.98017125,
									        -31.99721819
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.9
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.96284973,
									        -34.46286073
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.1
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -63.10717197,
									        -35.1846673
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.9
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -58.96703534,
									        -34.20377664
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.2
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.95412011,
									        -35.12530585
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.6
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.43166412,
									        -32.87253298
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.8
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.04516823,
									        -34.72445135
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.6
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.8543067,
									        -32.35155923
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.4
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.2645092,
									        -33.05557085
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.8
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.19298686,
									        -34.30072896
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.5
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.00828043,
									        -34.76211746
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.7
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.62445402,
									        -34.86316197
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.7
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.17411912,
									        -34.96832431
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.2
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -58.99068154,
									        -32.45202491
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.5
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.69564174,
									        -31.84482289
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.3
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.62580268,
									        -34.1231676
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.8
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.13813062,
									        -35.13686643
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.1
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.34218081,
									        -34.20575715
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.5
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.63538167,
									        -31.93744239
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.5
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.74726771,
									        -33.76698809
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.6
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -58.76519617,
									        -34.17609979
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.9
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.27802299,
									        -35.07572084
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.7
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.60713107,
									        -34.91420733
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.5
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.73901697,
									        -33.20258698
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.5
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.7516145,
									        -33.14029849
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.1
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.84822353,
									        -34.8374077
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.9
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.91513264,
									        -32.2800709
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.3
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.3776436,
									        -34.79889632
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.1
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.47605781,
									        -34.49192427
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.5
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.0551039,
									        -32.53207242
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.8
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -58.73016539,
									        -33.15502681
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.2
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.35041781,
									        -32.22171307
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.1
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.07013736,
									        -32.78875731
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.2
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -63.34533151,
									        -32.40749474
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.4
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -63.17344992,
									        -33.76584795
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.6
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.83723283,
									        -34.81465987
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.4
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.91908644,
									        -34.74987886
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.2
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.32409891,
									        -33.56336436
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.2
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.50314129,
									        -34.44695623
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.4
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.80036874,
									        -32.34830471
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.4
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.4076309,
									        -31.86216653
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.7
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.77062398,
									        -32.86510003
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.6
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.71405625,
									        -33.28709397
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.7
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -63.09963746,
									        -33.07960892
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.6
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.80924307,
									        -32.13730341
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.6
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.26603669,
									        -32.02058152
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.5
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.50270681,
									        -33.72052417
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.9
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.90991333,
									        -33.86750742
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.5
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.5730405,
									        -35.05183195
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.4
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.38811281,
									        -34.45935742
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.3
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.12707504,
									        -33.80844307
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.6
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -63.11961379,
									        -33.56229429
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.2
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.18040897,
									        -32.53976285
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.2
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.50831324,
									        -34.26804756
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.4
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.49555434,
									        -34.89657673
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.5
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.45983156,
									        -33.81998348
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.9
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.37801852,
									        -34.18586348
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.5
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.70696569,
									        -32.0868709
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.3
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.91683111,
									        -32.57215199
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.3
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.39876963,
									        -32.47930363
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.4
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.47105514,
									        -34.56160161
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.7
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.07031539,
									        -32.75391982
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.2
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -58.74935255,
									        -35.05167358
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.8
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.74108488,
									        -33.82951802
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.2
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.94167912,
									        -33.82462037
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.7
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -58.89642396,
									        -34.42817272
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.8
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.84659905,
									        -34.08583842
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.5
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.89904506,
									        -33.45973695
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.9
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -63.01002557,
									        -32.71281308
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.9
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.16264701,
									        -33.32186225
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.4
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.90348527,
									        -33.83673156
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.9
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -58.81783298,
									        -34.38489659
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.3
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -58.84681274,
									        -35.22256483
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.9
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.42058966,
									        -32.87806456
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.3
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.8426243,
									        -33.15260663
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.9
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.43696804,
									        -35.23461656
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.2
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.1197761,
									        -34.18996882
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.3
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.58191013,
									        -32.03949533
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.1
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -63.03391871,
									        -34.22574596
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.5
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.89666463,
									        -34.02895318
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.9
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -58.86928652,
									        -32.78673188
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.6
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.31964778,
									        -32.87471617
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.7
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.55113295,
									        -34.37924217
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.5
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.16759777,
									        -33.1671693
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.9
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -63.11440108,
									        -31.88247655
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.9
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.152146,
									        -34.28551143
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.3
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.56474378,
									        -34.31877998
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.2
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.68818841,
									        -32.453209
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.3
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.04032612,
									        -32.23170548
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.3
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.86616149,
									        -34.76440444
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.4
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.47665617,
									        -33.61924965
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.8
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.8324843,
									        -32.14728826
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.7
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.25740015,
									        -32.344178
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.4
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.55807953,
									        -34.8417958
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.1
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.49623159,
									        -33.35350056
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.6
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.27086102,
									        -32.73155395
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.5
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.97831596,
									        -34.51956653
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.7
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.82884677,
									        -32.78507464
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.6
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.18834628,
									        -35.22808632
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.7
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.59122138,
									        -35.24034025
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.7
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.45936644,
									        -32.10103435
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.7
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.09164972,
									        -34.30818759
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.7
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -58.69510019,
									        -34.07918027
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.3
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.1105063,
									        -33.63574364
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.1
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -58.81496526,
									        -32.30368553
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.9
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.70545242,
									        -35.11572465
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.7
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -58.74244761,
									        -32.11851934
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.5
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -58.98499218,
									        -32.58402735
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.9
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.81757765,
									        -32.83584275
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.6
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.42232588,
									        -34.47362199
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.8
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.75251359,
									        -34.31347098
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.7
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.76718331,
									        -33.64850945
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.3
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.14736663,
									        -32.01346183
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.1
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.74515429,
									        -32.80889859
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.8
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.5354181,
									        -33.59210338
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.4
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.32769473,
									        -33.70460056
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.6
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -58.66818076,
									        -33.20814698
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.2
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -63.23297883,
									        -32.89425258
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.1
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.04754084,
									        -33.59303501
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.2
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -58.62842736,
									        -33.09279231
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.2
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.13110722,
									        -31.8815544
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.6
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.85616931,
									        -34.39168318
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.7
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.28216843,
									        -33.9557414
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.3
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -63.28857852,
									        -34.38888696
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.6
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.09249411,
									        -35.19211579
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.5
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.18491884,
									        -33.04133333
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.2
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.44992458,
									        -34.94279738
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.8
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.28562935,
									        -32.15317272
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.7
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.89964083,
									        -35.24682719
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.5
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.17676646,
									        -31.89561405
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.7
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.7674449,
									        -32.92345308
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.4
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.6308819,
									        -33.03212148
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.1
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.024837,
									        -31.84464815
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.3
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.47511204,
									        -32.01315688
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.7
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.61451727,
									        -34.75881773
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.6
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.65346248,
									        -34.54454159
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.5
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.03891195,
									        -33.00762958
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.4
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.12673531,
									        -35.20490259
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.3
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.59334602,
									        -32.2874464
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.7
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -63.01365034,
									        -32.14560277
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.1
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.57321845,
									        -33.91571537
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.8
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.57732915,
									        -34.98932557
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.1
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.87409415,
									        -32.16504659
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.6
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.1518362,
									        -34.40984389
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.4
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.69421796,
									        -32.3663621
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.4
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.83684788,
									        -35.00834688
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.5
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.61303928,
									        -34.62937547
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.2
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.56640302,
									        -32.3985207
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.6
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.9030525,
									        -32.96705335
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.5
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.72240248,
									        -33.35688865
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.5
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -58.63126048,
									        -32.93136589
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.7
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -58.69022225,
									        -32.7270463
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.6
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -63.38386423,
									        -32.09410034
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.5
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.21576737,
									        -35.23277187
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.4
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.25522477,
									        -32.32883455
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.1
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.7365397,
									        -34.35549374
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.6
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.88865939,
									        -32.60992709
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.7
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.45941444,
									        -32.86624829
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.9
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.12452879,
									        -34.77814796
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.5
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.9426595,
									        -34.77175531
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.4
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.50176178,
									        -31.93143464
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.9
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.16655537,
									        -32.83474716
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.9
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.11535524,
									        -32.81550817
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.9
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -63.09311645,
									        -32.524333
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.1
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.89771021,
									        -32.51885793
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.5
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.74500891,
									        -33.77857383
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.9
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.51750589,
									        -32.31683686
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.7
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -63.03452107,
									        -33.40748095
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.7
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.50340028,
									        -34.56121409
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.8
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.34864172,
									        -34.04577355
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.9
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.76212243,
									        -34.13292701
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.6
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.97939125,
									        -34.35448782
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.8
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.8502595,
									        -33.43933686
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.4
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.66647373,
									        -33.98000341
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.5
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.12560031,
									        -34.75591844
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.2
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.27082922,
									        -33.84194676
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.7
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.5218988,
									        -34.15744116
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.6
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.87820888,
									        -34.6885165
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.3
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -63.26902452,
									        -32.18510037
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.8
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.58642787,
									        -33.30680495
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.1
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.83590932,
									        -31.95586449
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.9
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.94257356,
									        -32.11762509
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.8
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.092196,
									        -33.35400356
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.7
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.27017114,
									        -32.07613834
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.6
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -63.2112145,
									        -34.16331056
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.5
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.0461154,
									        -32.26814256
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.8
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.41509053,
									        -33.32664644
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.5
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -63.3988249,
									        -34.65154215
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.6
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.17265943,
									        -32.84633883
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.7
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.3635673,
									        -34.33207798
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.1
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.42541755,
									        -34.41385527
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.1
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.78185114,
									        -34.67385351
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.6
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -58.87379464,
									        -34.73522097
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.9
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -58.88125915,
									        -34.15688335
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.6
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.00152386,
									        -35.1530661
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.7
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.44833645,
									        -32.84600902
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.4
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.07669018,
									        -32.05190713
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.8
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.72075867,
									        -35.08552973
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.8
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.98018211,
									        -33.29053637
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.8
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.00609352,
									        -33.84147172
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.2
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.98661554,
									        -33.0810778
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.1
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.55619548,
									        -34.46800501
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.2
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.55878331,
									        -32.85150571
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.3
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -63.0984256,
									        -34.40979805
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.7
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.58433792,
									        -33.88451203
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.9
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.5069706,
									        -32.48068493
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.2
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.8972548,
									        -32.76952921
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.5
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -63.01138377,
									        -34.64104257
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.6
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.10339556,
									        -33.59360644
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.5
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.87970415,
									        -33.59916035
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.4
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -58.84009433,
									        -34.09101105
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.9
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.5362908,
									        -34.95315879
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.3
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -58.88692897,
									        -32.54579701
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.9
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -63.06964108,
									        -32.94195591
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.2
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.83892338,
									        -32.74544618
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.8
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.76557933,
									        -31.92480755
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.5
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.43813679,
									        -32.36869381
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.8
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.41415217,
									        -34.86791857
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.4
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.26391717,
									        -34.93559411
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.8
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.67482724,
									        -34.48815848
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.6
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.13507591,
									        -32.38891837
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.9
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -63.16947952,
									        -34.50860669
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.9
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.64218068,
									        -33.69492747
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.9
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.46615802,
									        -32.21323441
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.8
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.98448718,
									        -33.55319447
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.4
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.81255716,
									        -32.8399647
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.3
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.75481289,
									        -35.04549922
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.4
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.53116211,
									        -32.63757867
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.5
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.28330189,
									        -34.79834131
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.4
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.04730874,
									        -33.79694557
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.4
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -58.79631516,
									        -31.86384016
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.8
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.78076407,
									        -34.15737588
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.4
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.70208695,
									        -33.03287065
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.7
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.92439144,
									        -32.91562811
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.3
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.58097278,
									        -32.38332612
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.1
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.64819603,
									        -34.85639749
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.3
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -58.98660419,
									        -34.40490282
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.3
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.86726546,
									        -32.70873288
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.5
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.57691407,
									        -34.73228072
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.1
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -58.94331914,
									        -33.66174901
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.7
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.77506338,
									        -32.70687232
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.3
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -63.21696816,
									        -32.54683792
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.7
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.99041107,
									        -33.10587483
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.6
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.61607636,
									        -34.62739628
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.1
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.19022128,
									        -34.14391488
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.8
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.63461262,
									        -32.40059764
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.9
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.76211341,
									        -32.83708929
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.7
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -58.77188898,
									        -33.6700491
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.2
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.5370137,
									        -32.65029596
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.7
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.78841206,
									        -32.11645315
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.1
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.90308816,
									        -34.54437541
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.9
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.5220086,
									        -33.51032645
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.9
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -63.26897546,
									        -34.12966101
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.4
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.45689772,
									        -34.02910614
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.5
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.20990582,
									        -32.44824084
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.7
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -63.30576984,
									        -32.00289158
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.6
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.83795104,
									        -32.89802119
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.2
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.23539402,
									        -35.03415662
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.5
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.79753319,
									        -32.0229892
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.3
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.60835937,
									        -34.21481851
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.2
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.88928371,
									        -32.29934777
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.7
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.58677617,
									        -32.35265637
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.1
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.91080979,
									        -32.32221289
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.5
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.39900386,
									        -34.00847514
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.8
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.21568157,
									        -33.57482567
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.7
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.77739797,
									        -32.20283034
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.1
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.92471296,
									        -34.70144697
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.5
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.40384288,
									        -34.96402977
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.7
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.57372404,
									        -32.06124923
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.5
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.42826298,
									        -35.09340721
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.4
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.08587696,
									        -33.71745933
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.8
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.84083558,
									        -33.69555035
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.4
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.69627678,
									        -34.63155228
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.2
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -58.94059873,
									        -35.19990895
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.3
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.94709187,
									        -32.43928128
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.2
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.05607601,
									        -34.76384795
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.8
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.4167017,
									        -34.16855397
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.3
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.11346771,
									        -33.87012858
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.7
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -63.07455416,
									        -34.91116777
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.6
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.90170899,
									        -33.34978434
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.3
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.09998994,
									        -33.15505758
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.7
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.59749306,
									        -34.48520775
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.6
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.16161011,
									        -33.7450481
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.6
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.10058795,
									        -34.21649533
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.1
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.20009918,
									        -33.24356058
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.3
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -58.98306861,
									        -33.97510087
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.2
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.66793455,
									        -32.72222476
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.5
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.75431764,
									        -33.06871791
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.4
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.5193724,
									        -34.88435998
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.9
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.90742792,
									        -34.52926985
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.6
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.09053969,
									        -32.86176481
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.4
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.08349076,
									        -32.64858001
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.5
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.34728728,
									        -33.36778265
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.3
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.07427227,
									        -33.2067335
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.4
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.67077385,
									        -34.95062882
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.1
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -58.72399537,
									        -32.34139027
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.2
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.1117719,
									        -34.65965752
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.3
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.93406649,
									        -33.605175
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.1
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.57000091,
									        -34.7944174
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.9
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.91546873,
									        -32.58031445
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.6
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.34602847,
									        -32.48518568
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.1
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.3539894,
									        -32.54490866
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.3
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.84380883,
									        -34.38274652
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.9
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.43707433,
									        -33.03926814
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.5
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.87834346,
									        -34.9638025
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.3
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.12274716,
									        -32.00902376
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.6
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.9602315,
									        -34.86317304
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.8
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.08692224,
									        -32.79939933
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.1
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.71702599,
									        -32.89512554
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.1
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.21292893,
									        -34.90282353
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.6
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.0915939,
									        -33.76399726
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.9
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.18053335,
									        -34.42699392
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.1
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.6286363,
									        -32.68330673
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.1
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.45181976,
									        -33.669964
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.7
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.04739058,
									        -32.54629783
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.2
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.67701621,
									        -33.59760373
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.5
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.09365209,
									        -34.66777753
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.9
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.32406137,
									        -34.30093079
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.3
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.80680036,
									        -35.23711258
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.1
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.23090281,
									        -35.0302695
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.1
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.723443,
									        -33.35258739
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.3
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.6807993,
									        -35.09891843
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.9
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -58.79471041,
									        -34.7378852
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.5
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.64081509,
									        -32.74674226
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.3
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.33350463,
									        -32.86921646
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.6
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.46301984,
									        -33.82729365
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.2
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.15380111,
									        -32.32441937
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.3
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.19675064,
									        -33.44282247
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.6
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.44440424,
									        -33.47505212
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.1
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.47746871,
									        -34.71587387
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.4
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.30539655,
									        -34.184684
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.4
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -58.78924641,
									        -31.84689801
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.1
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.54070313,
									        -33.88049998
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.7
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.62121375,
									        -33.51671917
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.4
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -63.26136705,
									        -34.57233312
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.8
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.72649241,
									        -34.90205152
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.2
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.5833196,
									        -33.34168247
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.6
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.88387136,
									        -32.70142964
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.5
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.02638042,
									        -33.85215712
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.2
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.07030253,
									        -34.13211682
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.2
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.26437267,
									        -34.73777655
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.8
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.82930007,
									        -32.25096807
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.6
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -63.32380275,
									        -33.03032469
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.2
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.64021201,
									        -34.45030373
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.2
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.20979683,
									        -35.02242173
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.3
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.07575464,
									        -32.43403576
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.3
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.28677271,
									        -35.17662364
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.1
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.72030001,
									        -34.04465476
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.9
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.68017602,
									        -33.12553041
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.2
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.21820283,
									        -32.27225303
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.8
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -58.7884023,
									        -33.78368348
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.3
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.1823708,
									        -33.65902244
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.7
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.83003387,
									        -32.02016259
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.3
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.53346244,
									        -33.41524293
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.2
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.69606979,
									        -32.07455188
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.7
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.89516658,
									        -32.21641505
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.3
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.62886904,
									        -33.37844638
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.3
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.68527435,
									        -34.64394015
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.4
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.03379239,
									        -32.44327924
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.2
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.93744336,
									        -35.06029993
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.1
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.77958789,
									        -34.41468073
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.4
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.78141013,
									        -31.90069389
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.8
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.34584553,
									        -34.28458646
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.3
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.95451874,
									        -32.9452849
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.5
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.66033869,
									        -33.55953984
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.9
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.53601026,
									        -32.79571093
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.3
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.94819343,
									        -34.55475665
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.6
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -58.88684511,
									        -34.96491682
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.3
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.03086305,
									        -32.32347864
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.8
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.32756132,
									        -33.42201417
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.7
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.70150229,
									        -33.47178886
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.7
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.92270678,
									        -33.02276493
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.7
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.98941475,
									        -34.73916935
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.3
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.83151723,
									        -34.91809869
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.2
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.92159812,
									        -32.25210528
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.5
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.73012945,
									        -32.01610254
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.6
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.88075373,
									        -33.56740109
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.9
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.43424904,
									        -34.99537826
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.8
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.74772419,
									        -32.17161504
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.8
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.44369458,
									        -32.48905637
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.8
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.89701045,
									        -32.41150186
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.3
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.84680805,
									        -32.44132907
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.3
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.9193623,
									        -33.04341355
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.2
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -63.40848817,
									        -32.34738595
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.5
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.00336184,
									        -32.70357133
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.2
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.48327868,
									        -32.50552917
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.5
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.78182126,
									        -31.90905434
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.4
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -58.70291357,
									        -34.08196019
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.3
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -58.78196647,
									        -32.46292679
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.5
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.01282276,
									        -32.36028653
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.7
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.00066441,
									        -32.02370934
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.1
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.61196216,
									        -33.12604724
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.2
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -58.70192922,
									        -34.73992768
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.6
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.33147001,
									        -32.72447582
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.5
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.47144409,
									        -32.25089384
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.1
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.63304537,
									        -35.0309922
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.4
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.48696616,
									        -33.35534514
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.7
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.55718835,
									        -33.26925317
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.2
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.96830278,
									        -33.81878418
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.8
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.30147232,
									        -34.25823448
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.9
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.02663599,
									        -32.09998443
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.1
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.53676961,
									        -33.06195731
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.5
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.36959536,
									        -32.10992071
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.9
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.44609351,
									        -34.27130202
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.8
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.52084368,
									        -32.46429704
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.7
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.21458199,
									        -32.96873686
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.7
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.52192727,
									        -32.37672545
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.5
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.48390044,
									        -33.90631935
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.5
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.22640289,
									        -33.60408064
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.9
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.15261598,
									        -34.46863129
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.7
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.10034552,
									        -33.5664176
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.6
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.36177275,
									        -33.81626995
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.3
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -63.40911831,
									        -34.01556225
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.8
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -58.73709408,
									        -34.36961419
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.5
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.18294013,
									        -32.11836023
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.2
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -58.93261901,
									        -33.35092895
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.3
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.15600811,
									        -34.79641576
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.7
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.37696542,
									        -32.36393045
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.3
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -58.76038941,
									        -35.09008108
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.4
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.39990317,
									        -34.27714621
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.5
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -58.93874012,
									        -33.04182365
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.6
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.51385499,
									        -33.6251639
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.2
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.93602733,
									        -32.77528035
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.2
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.31846563,
									        -32.23255082
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.3
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -58.9097963,
									        -34.30523585
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.2
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.21927062,
									        -32.60486438
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.6
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.41423538,
									        -33.73701286
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.8
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.69847983,
									        -34.95125887
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.1
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.67160077,
									        -33.65163572
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.6
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.83233295,
									        -33.13089597
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.9
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.25118224,
									        -33.11968832
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.3
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.97663524,
									        -33.62571963
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.8
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -60.15049285,
									        -33.54730768
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.1
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.41365981,
									        -35.11354114
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.1
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -62.86222716,
									        -34.95995866
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.5
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.89176603,
									        -32.28960436
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.5
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -59.14430351,
									        -33.0792519
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.3
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.72994537,
									        -33.35402018
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.3
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -63.08858679,
									        -33.94576917
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.9
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.38814761,
									        -31.95409436
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.8
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -63.11526231,
									        -34.17496987
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.4
									    }
									},
									{
									    "geometry": {
									        "type": "Point",
									        "coordinates": [
									        -61.7568393,
									        -32.40904415
									        ]
									    },
									    "type": "Feature",
									    "properties": {
									        "foiPredictionScore": 0.1
									    }
									}
								]
							}
						},
						"layout": {
							"text-field": "{foiPredictionScore}",
							"text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
							"text-offset": [0, 0.6],
							"text-anchor": "top"
						}
					}
				);

				map.addLayer(
					{
						"id": "Regional_Metropolitana",
						"type": "line",
						"source": {
							"type": "geojson",
							"data": {
								"type": "FeatureCollection",
								"name": "Regional Metropolitana",
								"crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
								"features": [
									{ "type": "Feature", "properties": { "Name": "2ATVL1Y2", "description": "LINEA = 2ATVL1Y2<br>REGION = METROPOLITANA<br>CAMMESA = 268<br>ET_ORIGEN = Atucha<br>ET_DESTINO = Villa Lia<br>TERNA = 1<br>KV = 220<br>ANO = 1973<br>LONGITUD = 26,1<br>SECCION = 304,3<br>CONDUCTOR = 300\/50<br>MATERIAL = Al\/Ac<br>NRO_X = 2<br>HILO = 72,23<br>MAT_HILO = Acero<br>RESIST = 100<br>POT_NAT = 154,24<br>IMPEDANCIA = 313,8<br>CTE_ATENUA = 7,70E-05<br>CTE_FASE = 1,07E-03<br>VEL_PROPAG = 292300<br>" }, "geometry": { "type": "LineString", "coordinates": [ [ -59.20637, -33.9685 ], [ -59.20692, -33.96848 ], [ -59.21692, -33.97364 ], [ -59.23603, -33.98332 ], [ -59.245443261452102, -33.987480254525899 ], [ -59.260756616359117, -33.994254766229602 ], [ -59.26369, -33.99555 ], [ -59.26481, -33.99638 ], [ -59.27197, -34.00282 ], [ -59.29517, -34.0237 ], [ -59.318, -34.04424 ], [ -59.34083, -34.06477 ], [ -59.36454, -34.08599 ], [ -59.37602, -34.09624 ], [ -59.3871, -34.10719 ], [ -59.399773726896598, -34.116433029648697 ], [ -59.41164, -34.12509 ], [ -59.41116, -34.12591 ] ] } },
									{ "type": "Feature", "properties": { "Name": "2RDVL1Y2", "description": "LINEA = 2RDVL1Y2<br>REGION = METROPOLITANA<br>CAMMESA = 264<br>ET_ORIGEN = Villa Lia<br>ET_DESTINO = Gral. Rodriguez<br>TERNA = 1<br>KV = 220<br>ANO = 1973<br>LONGITUD = 63,6<br>SECCION = 564,8<br>CONDUCTOR = FINCH<br>MATERIAL = Al\/Ac<br>NRO_X = 1<br>HILO = 72,23<br>MAT_HILO = Acero<br>RESIST = 100<br>POT_NAT = 135,08<br>IMPEDANCIA = 358,3<br>CTE_ATENUA = 7,30E-05<br>CTE_FASE = 1,08E-03<br>VEL_PROPAG = 290500<br>" }, "geometry": { "type": "LineString", "coordinates": [ [ -59.4110308199554, -34.126827690518986 ], [ -59.410738138721193, -34.127236534305212 ], [ -59.410554321010402, -34.128962847698098 ], [ -59.4085, -34.13138 ], [ -59.39852, -34.14427 ], [ -59.38854, -34.15715 ], [ -59.38655, -34.15973 ], [ -59.37724, -34.16969 ], [ -59.35392, -34.19464 ], [ -59.34124, -34.2064 ], [ -59.31587, -34.2299 ], [ -59.31333, -34.23225 ], [ -59.28973, -34.25265 ], [ -59.2767, -34.26391 ], [ -59.27142, -34.26848 ], [ -59.24705, -34.28721 ], [ -59.246, -34.28878 ], [ -59.23772, -34.29489 ], [ -59.21016, -34.31573 ], [ -59.1964, -34.32636 ], [ -59.16877, -34.34768 ], [ -59.15491, -34.35838 ], [ -59.14096, -34.36913 ], [ -59.13817, -34.37128 ], [ -59.13775, -34.37295 ], [ -59.124881724266302, -34.38593454767063 ], [ -59.122699646817317, -34.386693744509472 ], [ -59.12009, -34.38869 ], [ -59.09185, -34.40931 ], [ -59.08904, -34.41137 ], [ -59.07955, -34.42031 ], [ -59.07249, -34.42697 ], [ -59.0721, -34.42869 ], [ -59.07012, -34.43139 ], [ -59.06025, -34.44488 ], [ -59.05119, -34.45725 ], [ -59.04103, -34.47111 ], [ -59.02974, -34.47744 ], [ -59.01505, -34.48568 ], [ -58.99958, -34.49434 ], [ -58.98270572867235, -34.502508988426627 ], [ -58.966338424561577, -34.510421357594637 ], [ -58.949981567819059, -34.518338537641597 ], [ -58.936668057787379, -34.524755328386483 ], [ -58.933468208818297, -34.526229263564581 ], [ -58.930611421433817, -34.527798093021417 ], [ -58.933467984576232, -34.52622952409547 ], [ -58.931256173107784, -34.527862132700413 ], [ -58.930661639267228, -34.528181018850063 ] ] } },
									{ "type": "Feature", "properties": { "Name": "5ABEZ1", "description": "LINEA = 5ABEZ1<br>REGION = METROPOLITANA<br>CAMMESA = 162<br>ET_ORIGEN = Ezeiza<br>ET_DESTINO = Abasto<br>TERNA = 1<br>KV = 500<br>ANO = 1985<br>LONGITUD = 58,2<br>SECCION = 304,3<br>CONDUCTOR = 300\/50<br>MATERIAL = Al\/Ac<br>NRO_X = 4<br>HILO = 93,29<br>MAT_HILO = Acero<br>RESIST = 100<br>POT_NAT = 954,56<br>IMPEDANCIA = 261,9<br>CTE_ATENUA = 4,73E-05<br>CTE_FASE = 1,08E-03<br>VEL_PROPAG = 291000<br>" }, "geometry": { "type": "LineString", "coordinates": [ [ -58.72719, -34.91125 ], [ -58.72841, -34.91251 ], [ -58.73082, -34.91501 ], [ -58.73344, -34.91772 ], [ -58.73317, -34.91916 ], [ -58.73283, -34.92097 ], [ -58.73224, -34.9215 ], [ -58.73164, -34.92203 ], [ -58.71647, -34.92556 ], [ -58.7008, -34.95187 ], [ -58.69369, -34.96381 ], [ -58.67083, -34.96935 ], [ -58.65231, -34.97383 ], [ -58.63253, -34.96881 ], [ -58.61253, -34.97184 ], [ -58.59233, -34.97489 ], [ -58.55239, -34.98093 ], [ -58.54442, -34.98214 ], [ -58.53315, -34.97802 ], [ -58.51431, -34.97114 ], [ -58.496, -34.96445 ], [ -58.4771, -34.95755 ], [ -58.46586, -34.95344 ], [ -58.45777, -34.95311 ], [ -58.41693, -34.95142 ], [ -58.40158, -34.95078 ], [ -58.39803, -34.94994 ], [ -58.38038, -34.94578 ], [ -58.37281, -34.944 ], [ -58.36123, -34.94707 ], [ -58.34205, -34.95216 ], [ -58.32706, -34.95614 ], [ -58.32385, -34.95701 ], [ -58.30417, -34.96236 ], [ -58.28856, -34.96661 ], [ -58.28476, -34.96783 ], [ -58.26542, -34.97403 ], [ -58.25017, -34.97892 ], [ -58.24658, -34.97773 ], [ -58.23267, -34.97314 ], [ -58.22855, -34.97286 ], [ -58.20797, -34.97145 ], [ -58.20392, -34.97117 ], [ -58.18733, -34.97234 ], [ -58.16653, -34.97381 ], [ -58.16372, -34.97139 ], [ -58.16431, -34.96983 ] ] } },
									{ "type": "Feature", "properties": { "Name": "5ABEZ2", "description": "LINEA = 5ABEZ2<br>REGION = METROPOLITANA<br>CAMMESA = 163<br>ET_ORIGEN = Ezeiza<br>ET_DESTINO = Abasto<br>TERNA = 2<br>KV = 500<br>ANO = 1985<br>LONGITUD = 58,0<br>SECCION = 304,3<br>CONDUCTOR = 300\/50<br>MATERIAL = Al\/Ac<br>NRO_X = 4<br>HILO = 93,29<br>MAT_HILO = Acero<br>RESIST = 100<br>POT_NAT = 954,56<br>IMPEDANCIA = 261,9<br>CTE_ATENUA = 4,73E-05<br>CTE_FASE = 1,08E-03<br>VEL_PROPAG = 291000<br>" }, "geometry": { "type": "LineString", "coordinates": [ [ -58.72658, -34.91164 ], [ -58.72747, -34.91254 ], [ -58.73136, -34.9165 ], [ -58.73053, -34.91819 ], [ -58.72973, -34.91867 ], [ -58.72894, -34.91914 ], [ -58.72042, -34.92003 ], [ -58.71392, -34.91483 ], [ -58.70257, -34.91664 ], [ -58.68279, -34.91981 ], [ -58.6635, -34.92289 ], [ -58.65487, -34.93703 ], [ -58.64961, -34.94564 ], [ -58.63228, -34.9545 ], [ -58.589908659054593, -34.943586582723647 ], [ -58.55497, -34.94161 ], [ -58.55148, -34.9402 ], [ -58.53372, -34.93303 ], [ -58.51958, -34.92731 ], [ -58.51621, -34.92614 ], [ -58.49707, -34.91949 ], [ -58.47793, -34.91284 ], [ -58.47017, -34.91014 ], [ -58.46778, -34.91042 ], [ -58.46168, -34.91411 ], [ -58.44659, -34.92325 ], [ -58.43113, -34.93261 ], [ -58.41509, -34.94231 ], [ -58.40175, -34.95039 ], [ -58.39795, -34.9495 ], [ -58.37986, -34.94526 ], [ -58.37281, -34.94361 ], [ -58.3611, -34.94671 ], [ -58.34192, -34.95178 ], [ -58.32692, -34.95575 ], [ -58.32302, -34.95681 ], [ -58.30388, -34.96203 ], [ -58.28839, -34.96625 ], [ -58.28474, -34.96742 ], [ -58.26572, -34.97354 ], [ -58.25019, -34.97853 ], [ -58.24664, -34.97735 ], [ -58.23272, -34.97275 ], [ -58.22875, -34.97248 ], [ -58.20922, -34.97115 ], [ -58.19756, -34.97036 ], [ -58.19002, -34.96996 ], [ -58.17186, -34.96901 ], [ -58.16814, -34.96881 ], [ -58.16572622370586, -34.969634487754213 ] ] } },
									{ "type": "Feature", "properties": { "Name": "5ABOL1", "description": "LINEA = 5ABOL1<br>REGION = METROPOLITANA<br>CAMMESA = 77<br>ET_ORIGEN = Olavarria<br>ET_DESTINO = Abasto<br>TERNA = 1<br>KV = 500<br>ANO = 1986<br>LONGITUD = 291,6<br>SECCION = 317,1<br>CONDUCTOR = P.RIVER<br>MATERIAL = Al\/Ac<br>NRO_X = 4<br>HILO = 73,91<br>MAT_HILO = Acero<br>RESIST = 100<br>POT_NAT = 965,62<br>IMPEDANCIA = 258,9<br>CTE_ATENUA = 4,52E-05<br>CTE_FASE = 1,08E-03<br>VEL_PROPAG = 290700<br>" }, "geometry": { "type": "LineString", "coordinates": [ [ -60.343644986343101, -36.836867050079832 ], [ -60.342752894105608, -36.836063815364007 ], [ -60.337925665775757, -36.830462047003721 ], [ -60.331839305108311, -36.824890366196733 ], [ -60.314730978512017, -36.810421069358789 ], [ -60.283299050105903, -36.786853652492802 ], [ -60.00132400846519, -36.549618520868272 ], [ -59.821566520189911, -36.360618696427167 ], [ -59.562366330316507, -36.152042786538757 ], [ -59.489971574422832, -36.091268126338719 ], [ -59.454280434326741, -36.062320967217516 ], [ -59.330986297354222, -35.963225216335651 ], [ -59.315496338875533, -35.948572750913762 ], [ -59.289319507471902, -35.923732261910438 ], [ -59.243460942922603, -35.880198097243557 ], [ -59.183672841409759, -35.823246534007971 ], [ -59.121720474367649, -35.764404408427502 ], [ -59.053823254180926, -35.717390788743153 ], [ -58.991499106877619, -35.674269528101917 ], [ -58.969088205393959, -35.65901137113795 ], [ -58.960834897260142, -35.648738070925504 ], [ -58.937838504053417, -35.619913202093223 ], [ -58.92192, -35.59131 ], [ -58.92036, -35.58833 ], [ -58.91622, -35.57653 ], [ -58.91411, -35.56981 ], [ -58.90872, -35.55877 ], [ -58.8892, -35.51876 ], [ -58.86983, -35.47906 ], [ -58.86025, -35.45943 ], [ -58.85156, -35.4415 ], [ -58.84569, -35.42856 ], [ -58.84369, -35.42539 ], [ -58.83461, -35.41258 ], [ -58.83217, -35.41136 ], [ -58.82856, -35.40956 ], [ -58.82411, -35.40808 ], [ -58.81484, -35.40508 ], [ -58.81064, -35.40372 ], [ -58.79504, -35.39152 ], [ -58.78394, -35.38297 ], [ -58.77609, -35.37726 ], [ -58.77225, -35.37447 ], [ -58.76519, -35.36836 ], [ -58.75801, -35.36167 ], [ -58.75083, -35.355 ], [ -58.74001, -35.34543 ], [ -58.7215, -35.32906 ], [ -58.68522, -35.29697 ], [ -58.66687, -35.28075 ], [ -58.65201, -35.26646 ], [ -58.63506, -35.2505 ], [ -58.6288, -35.24579 ], [ -58.61825, -35.23761 ], [ -58.61453, -35.23472 ], [ -58.60703, -35.22831 ], [ -58.60047, -35.22226 ], [ -58.5909, -35.21344 ], [ -58.58387, -35.20675 ], [ -58.56778, -35.19097 ], [ -58.56531, -35.18864 ], [ -58.56116, -35.18563 ], [ -58.55771, -35.18313 ], [ -58.55425, -35.18061 ], [ -58.55106, -35.17772 ], [ -58.5354, -35.1638 ], [ -58.48017, -35.11574 ], [ -58.47325, -35.10972 ], [ -58.45803, -35.10506 ], [ -58.40824, -35.08983 ], [ -58.35942, -35.07488 ], [ -58.35489, -35.0735 ], [ -58.33654, -35.06788 ], [ -58.33209, -35.06652 ], [ -58.32314, -35.06378 ], [ -58.31395, -35.05915 ], [ -58.29094, -35.04757 ], [ -58.27012, -35.03708 ], [ -58.262410763998197, -35.033190306551717 ], [ -58.24859, -35.02787 ], [ -58.2259, -35.01929 ], [ -58.20303, -35.0105 ], [ -58.18413, -34.99699 ], [ -58.165, -34.98332 ], [ -58.15764, -34.97806 ], [ -58.15736, -34.97453 ], [ -58.15931, -34.97106 ], [ -58.162617635933387, -34.968978097022919 ], [ -58.16297, -34.96869 ] ] } },
									{ "type": "Feature", "properties": { "Name": "5CARD1", "description": "LINEA = 5CARD1<br>REGION = METROPOLITANA<br>CAMMESA = 364<br>ET_ORIGEN = Campana<br>ET_DESTINO = Gral. Rodriguez<br>TERNA = 1<br>KV = 500<br>ANO = 1981<br>LONGITUD = 42,2<br>SECCION = 282,6<br>CONDUCTOR = DOVE<br>MATERIAL = Al\/Ac<br>NRO_X = 4<br>HILO = 72,23<br>MAT_HILO = Acero<br>RESIST = 100<br>POT_NAT = 1010,92<br>IMPEDANCIA = 247,3<br>CTE_ATENUA = 5,30E-05<br>CTE_FASE = 1,08E-03<br>VEL_PROPAG = 292100<br>" }, "geometry": { "type": "LineString", "coordinates": [ [ -58.997296558329062, -34.173233731276788 ], [ -58.994849127014433, -34.173247898083609 ], [ -58.99541, -34.17737 ], [ -58.99811, -34.19493 ], [ -59.00061, -34.21122 ], [ -59.00316, -34.22781 ], [ -59.00566, -34.24421 ], [ -59.00806, -34.26014 ], [ -59.01057, -34.27686 ], [ -59.0131, -34.29368 ], [ -59.01562, -34.31045 ], [ -59.01612, -34.31374 ], [ -59.01661, -34.31701 ], [ -59.01711, -34.32033 ], [ -59.01602, -34.32793 ], [ -59.01129, -34.36071 ], [ -59.00889, -34.3774 ], [ -59.00753, -34.38681 ], [ -59.00936, -34.39383 ], [ -59.01382, -34.41088 ], [ -59.01656, -34.42136 ], [ -59.01254, -34.42632 ], [ -59.00109, -34.44045 ], [ -58.99428, -34.44886 ], [ -58.98975, -34.45474 ], [ -58.97807, -34.46992 ], [ -58.9668, -34.48458 ], [ -58.95557, -34.49918 ], [ -58.94437, -34.51316 ], [ -58.93775, -34.52133 ], [ -58.93553, -34.52442 ], [ -58.93419, -34.52642 ], [ -58.93328, -34.52789 ], [ -58.933083967301542, -34.529091238001072 ], [ -58.932562587214839, -34.529288011075103 ] ] } },
									{ "type": "Feature", "properties": { "Name": "5ABOL2", "description": "LINEA = 5ABOL2<br>REGION = METROPOLITANA<br>CAMMESA = -<br>ET_ORIGEN = Olavarria<br>ET_DESTINO = Abasto<br>TERNA = 2<br>KV = 500<br>ANO = 1999<br>LONGITUD = 302,5<br>SECCION = 396,56<br>CONDUCTOR = P.RIVER M<br>MATERIAL = Al\/Ac<br>NRO_X = 4<br>HILO = 74<br>MAT_HILO = Acero<br>RESIST = 100<br>POT_NAT = 1110,76<br>IMPEDANCIA = 225,1<br>CTE_ATENUA = 4,47E-05<br>CTE_FASE = 1,07E-03<br>VEL_PROPAG = 293500<br>" }, "geometry": { "type": "LineString", "coordinates": [ [ -60.343177676480117, -36.837239960188761 ], [ -60.342177145264877, -36.836393851173099 ], [ -60.258624725846772, -36.778141486989867 ], [ -60.17042448325136, -36.766869798978021 ], [ -59.842364684325801, -36.676111215387436 ], [ -59.787460792875407, -36.662230295921361 ], [ -59.70678362222651, -36.642137448044352 ], [ -59.468505151852739, -36.44366122515914 ], [ -59.385165827008379, -36.377011923756278 ], [ -59.373259669534953, -36.36797209427337 ], [ -59.341978122123891, -36.348884343096081 ], [ -59.181381568410089, -36.252111132571798 ], [ -59.156301246349742, -36.236988599383423 ], [ -59.07156713425713, -36.150503657206777 ], [ -59.05028614084884, -36.12857822042151 ], [ -58.99018691190652, -36.054302385641833 ], [ -58.921877077904007, -35.969553160762182 ], [ -58.824434778997478, -35.885651755963863 ], [ -58.795472780430551, -35.860658201464247 ], [ -58.792176820865059, -35.85753600039618 ], [ -58.788876446319243, -35.854214188239773 ], [ -58.756154445040572, -35.821152217873902 ], [ -58.750332911068853, -35.809479362509002 ], [ -58.747983845960562, -35.805639225003517 ], [ -58.742619155281581, -35.798720163526369 ], [ -58.72509319768195, -35.781200233616211 ], [ -58.70635591897927, -35.76428367108057 ], [ -58.697184022570582, -35.754381549993873 ], [ -58.690154189479181, -35.747554207181857 ], [ -58.678736260347947, -35.737985096914443 ], [ -58.670589247511529, -35.732308580027322 ], [ -58.662325277754498, -35.726396581916667 ], [ -58.65194, -35.71788 ], [ -58.63346, -35.70259 ], [ -58.61269, -35.6854 ], [ -58.59205, -35.66831 ], [ -58.57135, -35.65119 ], [ -58.55156, -35.63481 ], [ -58.53812, -35.6141 ], [ -58.52981, -35.60128 ], [ -58.52494, -35.59469 ], [ -58.52214, -35.59103 ], [ -58.50959, -35.57783 ], [ -58.49265, -35.56043 ], [ -58.45655, -35.52334 ], [ -58.43989, -35.50622 ], [ -58.4305, -35.49658 ], [ -58.42546, -35.4891 ], [ -58.41258, -35.46999 ], [ -58.39931, -35.45029 ], [ -58.37439, -35.41296 ], [ -58.34644, -35.37136 ], [ -58.34397, -35.36781 ], [ -58.33313, -35.35468 ], [ -58.30307, -35.31782 ], [ -58.27292, -35.279 ], [ -58.27025, -35.27572 ], [ -58.25826, -35.26269 ], [ -58.24237, -35.2455 ], [ -58.22528, -35.22741 ], [ -58.20783, -35.20953 ], [ -58.19275, -35.19461 ], [ -58.19031, -35.192 ], [ -58.18725, -35.18856 ], [ -58.17808, -35.17685 ], [ -58.16259, -35.15689 ], [ -58.15972, -35.15319 ], [ -58.15646, -35.14963 ], [ -58.12845, -35.11907 ], [ -58.11564, -35.10508 ], [ -58.11699, -35.10192 ], [ -58.12604, -35.08076 ], [ -58.13436, -35.06031 ], [ -58.13783, -35.04831 ], [ -58.1399, -35.03901 ], [ -58.14094, -35.03433 ], [ -58.14306, -35.02642 ], [ -58.14565, -35.01891 ], [ -58.15214, -34.99897 ], [ -58.15303, -34.99519 ], [ -58.15602, -34.9785 ], [ -58.15662, -34.97512 ], [ -58.15731, -34.97128 ], [ -58.16279068282801, -34.968528377730877 ] ] } },
									{ "type": "Feature", "properties": { "Name": "5ATRD1", "description": "LINEA = 5ATRD1<br>REGION = METROPOLITANA<br>CAMMESA = -<br>ET_ORIGEN = Atucha<br>ET_DESTINO = Gral. Rodriguez<br>TERNA = 1<br>KV = 500<br>ANO = 1981<br>LONGITUD = 67,4<br>SECCION = 322,0<br>CONDUCTOR = KINGBIRD<br>MATERIAL = Al\/Ac<br>NRO_X = 4<br>HILO = 67,35<br>MAT_HILO = Acero<br>RESIST = 100<br>POT_NAT = 990,49<br>IMPEDANCIA = 252,4<br>CTE_ATENUA = 4,54E-05<br>CTE_FASE = 1,07E-03<br>VEL_PROPAG = 292400<br>" }, "geometry": { "type": "LineString", "coordinates": [ [ -59.204758113704038, -33.971857928943187 ], [ -59.204729221551652, -33.972854532984897 ], [ -59.20371, -33.97592 ], [ -59.19717, -33.99147 ], [ -59.18922, -34.01058 ], [ -59.17368, -34.04817 ], [ -59.17049, -34.0559 ], [ -59.17124, -34.05761 ], [ -59.16848, -34.06554 ], [ -59.15547, -34.10259 ], [ -59.14614, -34.12075 ], [ -59.13683, -34.13888 ], [ -59.12714, -34.15775 ], [ -59.12062, -34.16981 ], [ -59.11919, -34.17307 ], [ -59.10238, -34.21145 ], [ -59.08558, -34.24934 ], [ -59.06815, -34.28648 ], [ -59.04995, -34.3251 ], [ -59.03356, -34.35982 ], [ -59.03391, -34.36798 ], [ -59.02427, -34.38493 ], [ -59.02706, -34.39888 ], [ -59.0188, -34.41842 ], [ -59.01547, -34.42629 ], [ -58.99578, -34.44852 ], [ -58.99311, -34.45198 ], [ -58.97963, -34.46943 ], [ -58.95478, -34.50271 ], [ -58.94141, -34.52007 ], [ -58.93867, -34.52362 ], [ -58.93657, -34.52632 ], [ -58.933743350794948, -34.529214061196072 ], [ -58.932999535890659, -34.52993439129704 ], [ -58.932724934764082, -34.529992768448693 ] ] } },
									{ "type": "Feature", "properties": { "Name": "5BBOL1", "description": "LINEA = 5BBOL1<br>REGION = METROPOLITANA<br>CAMMESA = 75<br>ET_ORIGEN = B. Blanca<br>ET_DESTINO =Olavarria<br>TERNA = 1<br>KV = 500<br>ANO = 1986<br>LONGITUD = 255,4<br>SECCION = 317,1<br>CONDUCTOR = P.RIVER<br>MATERIAL = Al\/Ac<br>NRO_X = 4<br>HILO = 73,91<br>MAT_HILO = Acero<br>RESIST = 100<br>POT_NAT = 965,62<br>IMPEDANCIA = 258,9<br>CTE_ATENUA = 4,52E-05<br>CTE_FASE = 1,08E-03<br>VEL_PROPAG = 290700<br>" }, "geometry": { "type": "LineString", "coordinates": [ [ -61.489961069352312, -37.944630870657562 ], [ -61.48142, -37.93567 ], [ -61.47811, -37.93286 ], [ -61.46059, -37.91799 ], [ -61.42291, -37.88602 ], [ -61.36522, -37.83706 ], [ -61.32692, -37.80457 ], [ -61.28884, -37.77213 ], [ -61.285, -37.76886 ], [ -61.25255, -37.74124 ], [ -61.2168, -37.71079 ], [ -61.18969, -37.6875 ], [ -61.18387, -37.68119 ], [ -61.16753, -37.66348 ], [ -61.13466, -37.62785 ], [ -61.11948, -37.61139 ], [ -61.1165, -37.60817 ], [ -61.11358, -37.605 ], [ -61.10289, -37.59502 ], [ -61.08556, -37.57884 ], [ -61.06914, -37.56352 ], [ -61.03268, -37.52948 ], [ -60.99791, -37.49761 ], [ -60.981, -37.4828 ], [ -60.96553, -37.4672 ], [ -60.94888, -37.45091 ], [ -60.93095, -37.43402 ], [ -60.91373, -37.41781 ], [ -60.89577, -37.40089 ], [ -60.85975, -37.36696 ], [ -60.82368, -37.33298 ], [ -60.78986, -37.30112 ], [ -60.75683, -37.27016 ], [ -60.75349, -37.26706 ], [ -60.75017, -37.26396 ], [ -60.74761, -37.26158 ], [ -60.72489, -37.23983 ], [ -60.6889, -37.20634 ], [ -60.65268, -37.17258 ], [ -60.61659, -37.13893 ], [ -60.58258, -37.10722 ], [ -60.54823, -37.07547 ], [ -60.51149, -37.0421 ], [ -60.47502, -37.00898 ], [ -60.45825, -36.99375 ], [ -60.45156, -36.98778 ], [ -60.44887, -36.98381 ], [ -60.41918, -36.93992 ], [ -60.3975, -36.90787 ], [ -60.38518, -36.88966 ], [ -60.38075, -36.88311 ], [ -60.37595, -36.87277 ], [ -60.36908, -36.85797 ], [ -60.36619, -36.85562 ], [ -60.35013, -36.84276 ], [ -60.347183779709113, -36.840321134516159 ], [ -60.345962636866908, -36.839285167672372 ] ] } },
									{ "type": "Feature", "properties": { "Name": "5BBOL2", "description": "LINEA = 5BBOL2<br>REGION = METROPOLITANA<br>CAMMESA = -<br>ET_ORIGEN = B. Blanca<br>ET_DESTINO = Olavarria<br>TERNA = 2<br>KV = 500<br>ANO = 1999<br>LONGITUD = 260,0<br>SECCION = 396,56<br>CONDUCTOR = P.RIVER M<br>MATERIAL = Al\/Ac<br>NRO_X = 4<br>HILO = 73,91<br>MAT_HILO = Acero<br>RESIST = 100<br>POT_NAT = 1110,76<br>IMPEDANCIA = 225,1<br>CTE_ATENUA = 4,47E-05<br>CTE_FASE = 1,07E-03<br>VEL_PROPAG = 293500<br>" }, "geometry": { "type": "LineString", "coordinates": [ [ -61.555921242404601, -37.900458808727272 ], [ -61.55262, -37.89773 ], [ -61.53194, -37.88038 ], [ -61.4908, -37.84583 ], [ -61.47117, -37.82932 ], [ -61.42962, -37.79435 ], [ -61.39064, -37.76151 ], [ -61.34964, -37.72711 ], [ -61.3096, -37.69376 ], [ -61.26925, -37.66012 ], [ -61.23084, -37.62513 ], [ -61.19362, -37.58986 ], [ -61.17606, -37.57321 ], [ -61.14152, -37.54099 ], [ -61.12396, -37.52472 ], [ -61.1055, -37.50761 ], [ -61.08609, -37.48961 ], [ -61.06671, -37.47162 ], [ -61.02921, -37.43677 ], [ -60.9907, -37.40095 ], [ -60.9877, -37.39825 ], [ -60.95298, -37.37082 ], [ -60.91158, -37.3383 ], [ -60.86994, -37.30555 ], [ -60.83159, -37.27535 ], [ -60.79043, -37.24278 ], [ -60.77244, -37.22698 ], [ -60.73399, -37.19294 ], [ -60.69806, -37.1613 ], [ -60.66061, -37.1291 ], [ -60.62135, -37.09531 ], [ -60.58387, -37.06299 ], [ -60.57784, -37.05717 ], [ -60.56801, -37.04649 ], [ -60.55177, -37.02878 ], [ -60.51804, -36.99196 ], [ -60.48341, -36.95424 ], [ -60.4657, -36.93718 ], [ -60.42766, -36.90076 ], [ -60.39133, -36.86593 ], [ -60.37353, -36.84886 ], [ -60.34758, -36.83986 ], [ -60.34643913022709, -36.838934357397399 ] ] } },
									{ "type": "Feature", "properties": { "Name": "5CACE1", "description": "LINEA = 5CACE1<br>REGION = METROPOLITANA<br>CAMMESA = 363<br>ET_ORIGEN = Colonia Elia<br>ET_DESTINO = Campana<br>TERNA = 1<br>KV = 500<br>ANO = 1981<br>LONGITUD = 194,7<br>SECCION = 282,6<br>CONDUCTOR = DOVE<br>MATERIAL = Al\/Ac<br>NRO_X = 4<br>HILO = 72,23<br>MAT_HILO = Acero<br>RESIST = 100<br>POT_NAT = 1010,92<br>IMPEDANCIA = 247,3<br>CTE_ATENUA = 5,30E-05<br>CTE_FASE = 1,08E-03<br>VEL_PROPAG = 292100<br>" }, "geometry": { "type": "LineString", "coordinates": [ [ -58.293701295595248, -32.602645891339307 ], [ -58.293681359432632, -32.60456275572453 ], [ -58.29474, -32.61895 ], [ -58.29652, -32.63752 ], [ -58.30035, -32.67754 ], [ -58.30169, -32.69147 ], [ -58.30343, -32.69491 ], [ -58.31177, -32.7114 ], [ -58.31987, -32.72741 ], [ -58.33583, -32.75896 ], [ -58.35191, -32.79075 ], [ -58.36829, -32.82312 ], [ -58.3843, -32.85479 ], [ -58.39896, -32.88375 ], [ -58.40044, -32.88669 ], [ -58.40955, -32.90102 ], [ -58.41936, -32.91644 ], [ -58.4386, -32.9467 ], [ -58.4578, -32.97689 ], [ -58.47633, -33.00604 ], [ -58.4857, -33.02078 ], [ -58.49521, -33.03573 ], [ -58.50119, -33.04514 ], [ -58.50565, -33.05058 ], [ -58.517, -33.06444 ], [ -58.53928, -33.09144 ], [ -58.56242, -33.11965 ], [ -58.58632, -33.14878 ], [ -58.6096, -33.17717 ], [ -58.63204, -33.20452 ], [ -58.65536, -33.23287 ], [ -58.66698, -33.24694 ], [ -58.68808, -33.27261 ], [ -58.68964, -33.27572 ], [ -58.70606, -33.30852 ], [ -58.71457, -33.3255 ], [ -58.72087, -33.33802 ], [ -58.73815, -33.37235 ], [ -58.74644, -33.38883 ], [ -58.75369, -33.40983 ], [ -58.76747, -33.41792 ], [ -58.78122, -33.426 ], [ -58.78405, -33.42864 ], [ -58.79843, -33.44202 ], [ -58.80425, -33.44744 ], [ -58.80383, -33.45826 ], [ -58.80313, -33.47619 ], [ -58.80244, -33.49406 ], [ -58.80229, -33.49803 ], [ -58.80214, -33.50178 ], [ -58.79261, -33.51192 ], [ -58.79395, -33.52629 ], [ -58.79564, -33.54426 ], [ -58.79732, -33.56223 ], [ -58.799, -33.58019 ], [ -58.80744, -33.5968 ], [ -58.82433, -33.63001 ], [ -58.83278, -33.64662 ], [ -58.83811, -33.65711 ], [ -58.839656213131647, -33.663932204475202 ], [ -58.847381869655187, -33.698510642995437 ], [ -58.851334029370122, -33.715985648777888 ], [ -58.852039557859882, -33.71941655529389 ], [ -58.84961, -33.72339 ], [ -58.85214, -33.7347 ], [ -58.85375, -33.74192 ], [ -58.85508, -33.74535 ], [ -58.85776, -33.75221 ], [ -58.87101, -33.78627 ], [ -58.87836, -33.80517 ], [ -58.87638, -33.82327 ], [ -58.87245, -33.85916 ], [ -58.86853, -33.895 ], [ -58.86694, -33.9095 ], [ -58.88011, -33.91544 ], [ -58.88733, -33.91881 ], [ -58.89268, -33.92117 ], [ -58.89652, -33.92286 ], [ -58.9344, -33.93956 ], [ -58.94536, -33.94439 ], [ -58.94959, -33.9507 ], [ -58.96283, -33.97047 ], [ -58.96669, -33.98448 ], [ -58.97148, -34.00188 ], [ -58.98113, -34.03693 ], [ -58.99069, -34.07162 ], [ -58.99783, -34.09778 ], [ -58.9995, -34.10233 ], [ -59.00086, -34.10619 ], [ -59.0019, -34.1093 ], [ -58.9984, -34.1235 ], [ -58.9943, -34.1406 ], [ -58.993361186547993, -34.144414563307457 ], [ -58.9936, -34.1541 ], [ -58.9938, -34.1575 ], [ -58.9939, -34.1614 ], [ -58.994, -34.1654 ], [ -58.99417, -34.16928 ], [ -58.99479544204592, -34.172889669953889 ], [ -58.997286663240843, -34.172894522922107 ] ] } },
									{ "type": "Feature", "properties": { "Name": "5CEMB1", "description": "LINEA = 5CEMB1<br>REGION = METROPOLITANA<br>ET_ORIGEN = Colonia Elia<br>ET_DESTINO = Manuel Belgrano<br>TERNA = 1<br>KV = 500<br>ANO = 2008<br>LONGITUD = 205,8 km<br>" }, "geometry": { "type": "LineString", "coordinates": [ [ -58.294690465648301, -32.601989690964288 ], [ -58.294702995291878, -32.60300371185393 ], [ -58.32646578, -32.618466609999977 ], [ -58.379011619455447, -32.644020745357039 ], [ -58.45050881, -32.67870375 ], [ -58.49635008, -32.72872447000001 ], [ -58.545194505176852, -32.781956737438207 ], [ -58.576362563978691, -32.815800967536859 ], [ -58.590413887491437, -32.831758948095413 ], [ -58.604941190000012, -32.849136610000023 ], [ -58.619783115608783, -32.86449932180647 ], [ -58.625597279999987, -32.870639140000023 ], [ -58.63526083821737, -32.881536007637358 ], [ -58.68181597, -32.93374964 ], [ -58.70439139, -32.978066720000022 ], [ -58.71581736, -32.99874756 ], [ -58.71788711, -33.00280614 ], [ -58.72381066240014, -33.015400193636772 ], [ -58.733908414902842, -33.036014846932417 ], [ -58.744504987252618, -33.056400705044133 ], [ -58.753512014005622, -33.075416045959201 ], [ -58.75988603, -33.087929940000024 ], [ -58.76669086, -33.10012178 ], [ -58.80165281, -33.168461640000011 ], [ -58.83853778, -33.24043842 ], [ -58.85719936, -33.329551439999982 ], [ -58.87934761, -33.43512292 ], [ -58.89384753, -33.49844222 ], [ -58.89809667, -33.52424369 ], [ -58.93259403, -33.687437859999982 ], [ -58.90347197, -33.71071519 ], [ -58.89977289, -33.71387028 ], [ -58.892754279999977, -33.720475029999982 ], [ -58.881269970000012, -33.73223353 ], [ -58.86020728, -33.73731033 ], [ -58.85497744, -33.741845329999983 ], [ -58.85933242, -33.754682690000017 ], [ -58.87924889, -33.80548011 ], [ -58.8696875, -33.89435994 ], [ -58.86969064, -33.905550940000019 ], [ -58.86995389, -33.908557440000017 ], [ -58.945904060000011, -33.943816080000012 ], [ -58.96387822, -33.97001844 ], [ -58.97970631, -34.02760217 ], [ -58.996546560000013, -34.0887845 ], [ -58.99915458, -34.097198139999982 ], [ -59.00396019, -34.11217842 ], [ -59.002122359999987, -34.114192 ], [ -59.00166292, -34.11721472 ], [ -59.001463830000013, -34.12077939 ], [ -59.00096083, -34.124088309999983 ], [ -59.00000978, -34.12774461 ], [ -58.994237719999987, -34.14467431 ], [ -58.99553211, -34.152690329999977 ], [ -58.99565786, -34.15597881 ], [ -58.99165622000001, -34.162188060000013 ], [ -58.993409670000013, -34.16968189 ], [ -58.996155736261812, -34.187569006010897 ], [ -58.997506294408147, -34.187414055355433 ], [ -58.99911239, -34.187197 ], [ -59.00120603, -34.18672472 ], [ -59.002297415449647, -34.186136048859282 ] ] } },
									{ "type": "Feature", "properties": { "Name": "5EZHE1", "description": "LINEA = 5EZHE1<br>REGION = METROPOLITANA<br>CAMMESA = 71<br>ET_ORIGEN = Henderson<br>ET_DESTINO = Ezeiza<br>TERNA = 1<br>KV = 500<br>ANO = 1974<br>LONGITUD = 312,8<br>SECCION = 282,6<br>CONDUCTOR = DOVE<br>MATERIAL = Al\/Ac<br>NRO_X = 4<br>HILO = 72,23<br>MAT_HILO = Acero<br>RESIST = 100<br>POT_NAT = 963,39<br>IMPEDANCIA = 259,5<br>CTE_ATENUA = 5,00E-05<br>CTE_FASE = 1,08E-03<br>VEL_PROPAG = 291900<br>" }, "geometry": { "type": "LineString", "coordinates": [ [ -61.67057603422905, -36.345855190229997 ], [ -61.670033917774212, -36.345453474780477 ], [ -61.642972789477703, -36.331420271346389 ], [ -61.636775406835213, -36.327620853269622 ], [ -61.584147637334361, -36.293852355582743 ], [ -61.518876670874803, -36.257135867098832 ], [ -61.449229003866719, -36.218027349664482 ], [ -61.344598344194452, -36.157789761422883 ], [ -61.30991916931238, -36.137846968339062 ], [ -61.259638502570759, -36.108798255262819 ], [ -61.190996430482912, -36.067261602711461 ], [ -61.107702321083863, -36.017671045609411 ], [ -61.040173230598313, -35.978772918422699 ], [ -60.988757737127941, -35.949773300092311 ], [ -60.888507575717362, -35.89050557245988 ], [ -60.80391128698728, -35.840086689610992 ], [ -60.583209113201413, -35.708138358219102 ], [ -60.548334726608303, -35.687182946978169 ], [ -60.399636241815912, -35.627897648007227 ], [ -60.325404617075712, -35.596071505212812 ], [ -60.30649304675908, -35.587953332021307 ], [ -60.198238443281227, -35.536686210393292 ], [ -60.141510524638058, -35.509561678025399 ], [ -60.065652698893487, -35.483820150285929 ], [ -60.039441748496301, -35.475072453880358 ], [ -59.977469213326877, -35.446284889645987 ], [ -59.848198094860422, -35.388910729860477 ], [ -59.799377836271397, -35.34658422685667 ], [ -59.696944518193398, -35.300079686248203 ], [ -59.60499540560815, -35.269923939374273 ], [ -59.54591, -35.2432 ], [ -59.5112, -35.22701 ], [ -59.49293, -35.21832 ], [ -59.48367, -35.21392 ], [ -59.47667, -35.21076 ], [ -59.44108, -35.1947 ], [ -59.41828, -35.18442 ], [ -59.39133, -35.17149 ], [ -59.35616, -35.15462 ], [ -59.3202, -35.13739 ], [ -59.28353, -35.11979 ], [ -59.2473, -35.10235 ], [ -59.21097, -35.08487 ], [ -59.17775, -35.06886 ], [ -59.15972, -35.06084 ], [ -59.14257, -35.05321 ], [ -59.10816, -35.03791 ], [ -59.09244, -35.03092 ], [ -59.05621, -35.01623 ], [ -59.019, -35.00095 ], [ -58.98561, -34.98707 ], [ -58.95019, -34.97235 ], [ -58.93204, -34.9648 ], [ -58.92117, -34.96028 ], [ -58.91317, -34.95877 ], [ -58.87341, -34.95123 ], [ -58.83257, -34.9435 ], [ -58.81112, -34.93943 ], [ -58.77015, -34.93166 ], [ -58.75054, -34.92795 ], [ -58.73483, -34.92497 ], [ -58.73231, -34.92227 ], [ -58.72717, -34.91677 ], [ -58.72453, -34.91394 ], [ -58.724219881576609, -34.913609411644472 ] ] } },
									{ "type": "Feature", "properties": { "Name": "5EZHE2", "description": "LINEA = 5EZHE2<br>REGION = METROPOLITANA<br>CAMMESA = 72<br>ET_ORIGEN = Henderson<br>ET_DESTINO = Ezeiza<br>TERNA = 2<br>KV = 500<br>ANO = 1976<br>LONGITUD = 312,8<br>SECCION = 282,6<br>CONDUCTOR = DOVE<br>MATERIAL = Al\/Ac<br>NRO_X = 4<br>HILO = 72,23<br>MAT_HILO = Acero<br>RESIST = 100<br>POT_NAT = 963,39<br>IMPEDANCIA = 259,5<br>CTE_ATENUA = 5,00E-05<br>CTE_FASE = 1,08E-03<br>VEL_PROPAG = 291900<br>" }, "geometry": { "type": "LineString", "coordinates": [ [ -61.671076023261968, -36.345425575590141 ], [ -61.670508047208941, -36.34498095873451 ], [ -61.643377854421551, -36.330816039931626 ], [ -61.584653005604508, -36.293317821196403 ], [ -61.47883122230045, -36.233612443191333 ], [ -61.457271170086933, -36.2216110604476 ], [ -61.348388106333239, -36.159220616184413 ], [ -61.282904879257863, -36.121408158085472 ], [ -61.272617058037362, -36.115388389164011 ], [ -61.232728940676083, -36.091456815435883 ], [ -61.197470611907697, -36.070016220020193 ], [ -61.188106036366072, -36.064352242604642 ], [ -61.148241612424691, -36.040545648784303 ], [ -61.10172726736004, -36.013194312683979 ], [ -61.055733263687713, -35.986607355683589 ], [ -61.032404467604799, -35.973499227826771 ], [ -60.987117673433943, -35.947897424555521 ], [ -60.930818661300023, -35.914672499057772 ], [ -60.821131587608782, -35.84949207122326 ], [ -60.741809234872839, -35.802119384196047 ], [ -60.548797789523043, -35.686384889625522 ], [ -60.400954788806999, -35.627579432743907 ], [ -60.306710582774151, -35.587246075346862 ], [ -60.28880887813245, -35.579090826736781 ], [ -60.1418708587073, -35.508898799248882 ], [ -60.066172746786357, -35.483147854011349 ], [ -60.039915541609957, -35.474289301477327 ], [ -59.977886666421597, -35.445654235655716 ], [ -59.848756129467048, -35.388344090991183 ], [ -59.799901921663043, -35.345897856720207 ], [ -59.697199145061212, -35.299386206749318 ], [ -59.605212123725579, -35.269176935510437 ], [ -59.553776533011771, -35.245775414273972 ], [ -59.529085486476738, -35.23446512057879 ], [ -59.4933, -35.21748 ], [ -59.45837, -35.20149 ], [ -59.44151, -35.19388 ], [ -59.42436, -35.18614 ], [ -59.40902, -35.17895 ], [ -59.37445, -35.16237 ], [ -59.35658, -35.15381 ], [ -59.33874, -35.14526 ], [ -59.32062, -35.13658 ], [ -59.30215, -35.12773 ], [ -59.26598, -35.11036 ], [ -59.22971, -35.09293 ], [ -59.19482, -35.07617 ], [ -59.17839, -35.06833 ], [ -59.14299, -35.05254 ], [ -59.1085, -35.03725 ], [ -59.09275, -35.03028 ], [ -59.07467, -35.02293 ], [ -59.03811, -35.00806 ], [ -59.00069, -34.99257 ], [ -58.98584, -34.98642 ], [ -58.95038, -34.97175 ], [ -58.93221, -34.96422 ], [ -58.92133, -34.95972 ], [ -58.91333, -34.95819 ], [ -58.87357, -34.95057 ], [ -58.83273, -34.94276 ], [ -58.79126, -34.93495 ], [ -58.75095, -34.92738 ], [ -58.73528, -34.92444 ], [ -58.73291, -34.92165 ], [ -58.73057, -34.9189 ], [ -58.72809, -34.91598 ], [ -58.72561, -34.91306 ], [ -58.725322975857686, -34.912700715126 ] ] } },
									{ "type": "Feature", "properties": { "Name": "5EZRD1", "description": "LINEA = 5EZRD1<br>REGION = METROPOLITANA<br>CAMMESA = 97<br>ET_ORIGEN = Rodriguez<br>ET_DESTINO = Ezeiza<br>TERNA = 1<br>KV = 500<br>ANO = 1981<br>LONGITUD = 53,5<br>SECCION = 282,6<br>CONDUCTOR = DOVE<br>MATERIAL = Al\/Ac<br>NRO_X = 4<br>HILO = 72,23<br>MAT_HILO = Acero<br>RESIST = 100<br>POT_NAT = 951,66<br>IMPEDANCIA = 262,7<br>CTE_ATENUA = 5,03E-05<br>CTE_FASE = 1,08E-03<br>VEL_PROPAG = 291000<br>" }, "geometry": { "type": "LineString", "coordinates": [ [ -58.932858983884493, -34.53104437613775 ], [ -58.933832548919803, -34.530950534553398 ], [ -58.936960437854047, -34.532010343313601 ], [ -58.9431, -34.54139 ], [ -58.96369, -34.57214 ], [ -58.97415, -34.58563 ], [ -58.97775, -34.59028 ], [ -58.98081, -34.59986 ], [ -58.98392, -34.60217 ], [ -58.98377, -34.60553 ], [ -58.98369, -34.60747 ], [ -58.97944, -34.61293 ], [ -58.96851, -34.62697 ], [ -58.94634, -34.65544 ], [ -58.93512, -34.66984 ], [ -58.93286, -34.67275 ], [ -58.92951, -34.68756 ], [ -58.9258, -34.70396 ], [ -58.92431, -34.71056 ], [ -58.92176, -34.72113 ], [ -58.91399, -34.75472 ], [ -58.90944, -34.77819 ], [ -58.90052, -34.78547 ], [ -58.8857, -34.79757 ], [ -58.8711, -34.80948 ], [ -58.85654, -34.82137 ], [ -58.84229, -34.833 ], [ -58.82793, -34.84473 ], [ -58.81298, -34.85693 ], [ -58.81007, -34.8593 ], [ -58.80694, -34.86186 ], [ -58.79624, -34.86789 ], [ -58.78233, -34.87572 ], [ -58.77896, -34.87836 ], [ -58.76397, -34.89011 ], [ -58.75858, -34.89433 ], [ -58.74498, -34.89607 ], [ -58.73664, -34.89714 ], [ -58.72773, -34.90391 ], [ -58.72508, -34.90592 ], [ -58.725258380238671, -34.907299248309783 ], [ -58.72564, -34.91025 ], [ -58.72614, -34.91081 ] ] } },
									{ "type": "Feature", "properties": { "Name": "5EZRD2", "description": "LINEA = 5EZRD2<br>REGION = METROPOLITANA<br>CAMMESA = 98<br>ET_ORIGEN = Rodriguez<br>ET_DESTINO = Ezeiza<br>TERNA = 2<br>KV = 500<br>ANO = 1981<br>LONGITUD = 60,2<br>SECCION = 282,6<br>CONDUCTOR = DOVE<br>MATERIAL = Al\/Ac<br>NRO_X = 4<br>HILO = 72,23<br>MAT_HILO = Acero<br>RESIST = 100<br>POT_NAT = 951,66<br>IMPEDANCIA = 262,7<br>CTE_ATENUA = 5,03E-05<br>CTE_FASE = 1,08E-03<br>VEL_PROPAG = 291000<br>" }, "geometry": { "type": "LineString", "coordinates": [ [ -58.932757159338053, -34.53052063125822 ], [ -58.934470746995707, -34.530096320954669 ], [ -58.94604, -34.53623 ], [ -58.95461, -34.54075 ], [ -58.96264, -34.5423 ], [ -58.98183, -34.54599 ], [ -58.99369, -34.54828 ], [ -58.99799, -34.55296 ], [ -59.00903, -34.565 ], [ -59.01211, -34.57828 ], [ -59.02433, -34.59147 ], [ -59.02806, -34.60231 ], [ -59.02747, -34.60569 ], [ -59.0117, -34.61908 ], [ -58.99741, -34.63122 ], [ -58.9832, -34.64329 ], [ -58.96909, -34.65528 ], [ -58.96333, -34.66017 ], [ -58.95348, -34.66302 ], [ -58.94031, -34.66683 ], [ -58.93781, -34.66881 ], [ -58.94067, -34.68357 ], [ -58.94124, -34.68649 ], [ -58.94181, -34.68942 ], [ -58.93814, -34.69778 ], [ -58.93439, -34.70633 ], [ -58.93556, -34.7126 ], [ -58.93922, -34.73225 ], [ -58.9279, -34.75009 ], [ -58.92227, -34.75895 ], [ -58.91373, -34.77241 ], [ -58.90989, -34.77847 ], [ -58.90114, -34.78562 ], [ -58.88686, -34.79728 ], [ -58.8614, -34.81807 ], [ -58.83288, -34.84136 ], [ -58.81885, -34.85281 ], [ -58.80733, -34.86222 ], [ -58.80439, -34.86388 ], [ -58.78272, -34.87611 ], [ -58.77374, -34.88314 ], [ -58.75886, -34.89481 ], [ -58.74053, -34.89718 ], [ -58.73672, -34.89767 ], [ -58.72631, -34.90564 ], [ -58.726239878911073, -34.907347817142231 ], [ -58.72614, -34.90978 ], [ -58.72658, -34.91042 ] ] } },
									{ "type": "Feature", "properties": { "Name": "5HEMC2", "description": "LINEA = 5HEMC2<br>REGION = METROPOLITANA<br>CAMMESA = -<br>ET_ORIGEN = Macachin<br>ET_DESTINO = Henderson<br>TERNA = 2<br>KV = 500<br>ANO = 1976<br>LONGITUD = 191,6<br>SECCION = 282,6<br>CONDUCTOR = DOVE<br>MATERIAL = Al\/Ac<br>NRO_X = 4<br>HILO = 72,23<br>MAT_HILO = Acero<br>RESIST = 100<br>POT_NAT = 963,39<br>IMPEDANCIA = 259,5<br>CTE_ATENUA = 5,00E-05<br>CTE_FASE = 1,08E-03<br>VEL_PROPAG = 291900<br>" }, "geometry": { "type": "LineString", "coordinates": [ [ -63.563501367663306, -37.153020744767332 ], [ -63.563249600572057, -37.15350050215946 ], [ -63.541670940236507, -37.14239987208115 ], [ -63.498919884477189, -37.120793085525712 ], [ -63.476908542317567, -37.109573836037079 ], [ -63.434971984602853, -37.088052593311509 ], [ -63.39177, -37.06626 ], [ -63.35006, -37.04454 ], [ -63.308127782550017, -37.022286034887117 ], [ -63.268341680080482, -37.001246973504102 ], [ -63.226707958231863, -36.979251539844007 ], [ -63.18551500554689, -36.957441025717777 ], [ -63.121879883369083, -36.923681870136662 ], [ -63.11414, -36.91956 ], [ -63.058046556431087, -36.897575007468397 ], [ -63.015511712606823, -36.880730235621193 ], [ -62.97092, -36.86214 ], [ -62.92607, -36.84581 ], [ -62.88092, -36.82939 ], [ -62.869, -36.82506 ], [ -62.86014, -36.82162 ], [ -62.81559, -36.80428 ], [ -62.79308, -36.79553 ], [ -62.72675, -36.76968 ], [ -62.65961, -36.74347 ], [ -62.61509, -36.72607 ], [ -62.570773523095383, -36.708756258104422 ], [ -62.54836, -36.69997 ], [ -62.505053879416629, -36.682901531900903 ], [ -62.48326608060291, -36.674225628923367 ], [ -62.439789948911617, -36.656255881645151 ], [ -62.409440474385299, -36.64354937201287 ], [ -62.39654, -36.63861 ], [ -62.35199, -36.621 ], [ -62.30763, -36.60348 ], [ -62.2856, -36.59478 ], [ -62.24131, -36.57728 ], [ -62.19766, -36.55998 ], [ -62.13067, -36.5334 ], [ -62.08381, -36.5148 ], [ -62.04101, -36.49773 ], [ -62.01899, -36.48893 ], [ -61.99774, -36.48045 ], [ -61.95551, -36.46358 ], [ -61.91157, -36.44601 ], [ -61.86753, -36.42835 ], [ -61.80193, -36.40185 ], [ -61.758868386362352, -36.383559670301253 ], [ -61.716199060729359, -36.366159981454757 ], [ -61.67431, -36.34925 ], [ -61.670171745132507, -36.348036944550842 ], [ -61.669663478068827, -36.34761316601049 ] ] } },
									{ "type": "Feature", "properties": { "Name": "5HEPU1", "description": "LINEA = 5HEPU1<br>REGION = METROPOLITANA<br>CAMMESA = 60<br>ET_ORIGEN = Puelches<br>ET_DESTINO = Henderson<br>TERNA = 1<br>KV = 500<br>ANO = 1974<br>LONGITUD = 419,9<br>SECCION = 282,6<br>CONDUCTOR = DOVE<br>MATERIAL = Al\/Ac<br>NRO_X = 4<br>HILO = 72,23<br>MAT_HILO = Acero<br>RESIST = 100<br>POT_NAT = 963,39<br>IMPEDANCIA = 259,5<br>CTE_ATENUA = 5,00E-05<br>CTE_FASE = 1,08E-03<br>VEL_PROPAG = 291900<br>" }, "geometry": { "type": "LineString", "coordinates": [ [ -63.56288710286077, -37.15414908673484 ], [ -63.518636417371312, -37.131606377127078 ], [ -63.475752422017273, -37.109802359140737 ], [ -63.41196, -37.07742 ], [ -63.3705, -37.05611 ], [ -63.32898, -37.03422 ], [ -63.32478, -37.03201 ], [ -63.287367791502469, -37.0121672304832 ], [ -63.246814608394992, -36.990707241014043 ], [ -63.20551039445489, -36.968809941783782 ], [ -63.16453270191807, -36.947113232956987 ], [ -63.121542052470261, -36.92432393282558 ], [ -63.11367, -36.92014 ], [ -63.07947, -36.90672 ], [ -63.015200622467923, -36.881413739343827 ], [ -62.97058, -36.86269 ], [ -62.94833, -36.85463 ], [ -62.90328, -36.83828 ], [ -62.88067, -36.83004 ], [ -62.8766, -36.82856 ], [ -62.86858, -36.82564 ], [ -62.85984, -36.82224 ], [ -62.8379, -36.81372 ], [ -62.79342, -36.79644 ], [ -62.74861, -36.77895 ], [ -62.70405, -36.76156 ], [ -62.65998, -36.74434 ], [ -62.61523, -36.72685 ], [ -62.59304, -36.71818 ], [ -62.54802, -36.70057 ], [ -62.52574, -36.69182 ], [ -62.50361, -36.68313 ], [ -62.46184776035502, -36.666304452204528 ], [ -62.43939315931862, -36.656886965437657 ], [ -62.409056861594991, -36.644132419765121 ], [ -62.37463, -36.63071 ], [ -62.32942, -36.61285 ], [ -62.28523, -36.59539 ], [ -62.24101, -36.57791 ], [ -62.19726, -36.56058 ], [ -62.1527, -36.54291 ], [ -62.10789, -36.52513 ], [ -62.0646, -36.5079 ], [ -62.02094, -36.49048 ], [ -61.97758, -36.47317 ], [ -61.934, -36.45574 ], [ -61.88963, -36.43798 ], [ -61.86661, -36.42875 ], [ -61.80226, -36.40277 ], [ -61.758566993199068, -36.384229454242842 ], [ -61.715370495115479, -36.366566124813588 ], [ -61.67367, -36.35008 ], [ -61.669684072577631, -36.348436594167829 ], [ -61.669164685363597, -36.348026306147972 ] ] } },
									{ "type": "Feature", "properties": { "Name": "5MBRD1", "description": "LINEA = 5MBRD1<br>REGION = METROPOLITANA<br>ET_ORIGEN = Manuel Belgrano<br>ET_DESTINO = Rodriguez<br>TERNA = 1<br>KV = 500<br>ANO = 2008<br>LONGITUD = 41,9<br>NRO_X = 0<br>RESIST = 0<br>VEL_PROPAG = 0<br>" }, "geometry": { "type": "LineString", "coordinates": [ [ -59.002701231269192, -34.186636880713408 ], [ -59.001789470000013, -34.187269749999977 ], [ -58.998569970000013, -34.190444170000013 ], [ -59.013636829999989, -34.29001817 ], [ -59.027548470000013, -34.341819530000024 ], [ -59.030484279999989, -34.364989470000019 ], [ -59.014589889999989, -34.376493780000011 ], [ -59.01075381, -34.38255106 ], [ -59.00905872, -34.390578860000012 ], [ -59.01620028, -34.417875470000013 ], [ -59.016947530000017, -34.42142178 ], [ -59.014709030000013, -34.424467639999982 ], [ -58.99539581, -34.448175639999981 ], [ -58.978525530000013, -34.470074030000013 ], [ -58.961567720000012, -34.49249694 ], [ -58.951720389999977, -34.5059315 ], [ -58.943893690000017, -34.51598281 ], [ -58.94146094, -34.518974670000013 ], [ -58.93870761, -34.521768500000022 ], [ -58.93624864, -34.52454814 ], [ -58.93377567, -34.52806875 ], [ -58.933626712643779, -34.52853177462304 ], [ -58.932457388765599, -34.528637855075452 ] ] } }
								]
							}
						},
						"paint": {
							"line-color": "#0000ff",
							"line-width": 4
						}
					}
				);

				map.addLayer(
					{
						"id": "Regional_Norte",
						"type": "line",
						"source": {
							"type": "geojson",
							"data": {
								"type": "FeatureCollection",
								"name": "Regional Norte",
								"crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
								"features": [
									{ "type": "Feature", "properties": { "Name": "2RARO1Y2", "description": "LINEA = 2RARO1Y2<br>REGION = NORTE<br>CAMMESA = -<br>ET_ORIGEN = Ramallo<br>ET_DESTINO = Rosario Oeste<br>TERNA = 0<br>KV = 220<br>ANO = 1974<br>LONGITUD = 76,9<br>SECCION = 304,3<br>CONDUCTOR = 300\/50<br>MATERIAL = Al\/Ac<br>NRO_X = 2<br>HILO = 72,23<br>MAT_HILO = Acero<br>RESIST = 100<br>POT_NAT = 184,87<br>IMPEDANCIA = 261,8<br>CTE_ATENUA = 9,21E-05<br>CTE_FASE = 1,07E-03<br>VEL_PROPAG = 292700<br>", "tessellate": -1, "visibility": -1 }, "geometry": { "type": "MultiLineString", "coordinates": [ [ [ -60.179522471170472, -33.411077145678142 ], [ -60.17949, -33.41185 ], [ -60.18958, -33.42323 ], [ -60.19685, -33.42456 ], [ -60.20419, -33.42293 ], [ -60.21842, -33.41265 ], [ -60.24633, -33.39229 ], [ -60.27429, -33.37157 ], [ -60.28845, -33.36125 ], [ -60.31652, -33.3404 ], [ -60.3305, -33.32985 ], [ -60.34447, -33.31929 ], [ -60.3584, -33.30877 ], [ -60.37209, -33.29842 ], [ -60.38577, -33.28808 ], [ -60.4136, -33.26702 ], [ -60.45416, -33.23731 ], [ -60.46822, -33.22709 ], [ -60.48222, -33.21692 ], [ -60.50922, -33.19727 ], [ -60.52236, -33.18711 ], [ -60.53558, -33.17649 ], [ -60.54845, -33.16615 ], [ -60.57528, -33.14458 ], [ -60.58813, -33.1344 ], [ -60.60067, -33.1247 ], [ -60.60561, -33.12088 ], [ -60.63634, -33.10055 ], [ -60.64213, -33.09709 ], [ -60.64506, -33.09534 ], [ -60.64799, -33.09328 ], [ -60.6565, -33.08731 ], [ -60.69276, -33.06183 ], [ -60.70748, -33.04521 ], [ -60.72385, -33.02671 ], [ -60.73529, -33.00912 ], [ -60.74307, -32.99716 ], [ -60.76712, -32.97783 ], [ -60.777825436819541, -32.971499279117261 ], [ -60.778907805651883, -32.971181932928729 ], [ -60.779182340334792, -32.970480364026642 ], [ -60.77890785578132, -32.971181894599702 ], [ -60.777825488185563, -32.971499357551203 ], [ -60.778330437640598, -32.971120277327238 ], [ -60.778527534064303, -32.970494843001582 ] ] ] } },
									{ "type": "Feature", "properties": { "Name": "2RASN1", "description": "LINEA = 2RASN1<br>REGION = NORTE<br>CAMMESA = 270<br>ET_ORIGEN = San Nicolas<br>ET_DESTINO = Ramallo<br>TERNA = 1<br>KV = 220<br>ANO = 1958<br>LONGITUD = 6,3<br>SECCION = 564,8<br>CONDUCTOR = FINCH<br>MATERIAL = Al\/Ac<br>NRO_X = 1<br>HILO = 72,23<br>MAT_HILO = Acero<br>RESIST = 100<br>POT_NAT = 135,08<br>IMPEDANCIA = 358,3<br>CTE_ATENUA = 7,30E-05<br>CTE_FASE = 1,08E-03<br>VEL_PROPAG = 290500<br>", "tessellate": -1, "visibility": -1 }, "geometry": { "type": "LineString", "coordinates": [ [ -60.171353106674196, -33.356326209300562 ], [ -60.170842405947859, -33.356755114418718 ], [ -60.171, -33.36067 ], [ -60.17306, -33.36682 ], [ -60.17412, -33.36985 ], [ -60.17432, -33.37155 ], [ -60.17167, -33.38047 ], [ -60.16995, -33.38633 ], [ -60.1729, -33.39454 ], [ -60.17583, -33.40269 ], [ -60.17707, -33.4037 ], [ -60.17945, -33.40899 ], [ -60.179282616645907, -33.410194686787918 ] ] } },
									{ "type": "Feature", "properties": { "Name": "2RAVL1Y2", "description": "LINEA = 2RAVL1Y2<br>REGION = NORTE<br>CAMMESA = 266<br>ET_ORIGEN = Ramallo<br>ET_DESTINO = Villa Lia<br>TERNA = 1<br>KV = 220<br>ANO = 1973<br>LONGITUD = 109,2<br>SECCION = 564,8<br>CONDUCTOR = FINCH<br>MATERIAL = Al\/Ac<br>NRO_X = 1<br>HILO = 72,23<br>MAT_HILO = Acero<br>RESIST = 100<br>POT_NAT = 135,08<br>IMPEDANCIA = 358,3<br>CTE_ATENUA = 7,30E-05<br>CTE_FASE = 1,08E-03<br>VEL_PROPAG = 290500<br>", "tessellate": -1, "visibility": -1 }, "geometry": { "type": "LineString", "coordinates": [ [ -60.179103105235292, -33.411010428370282 ], [ -60.17885, -33.41211 ], [ -60.17825, -33.41523 ], [ -60.17583, -33.42771 ], [ -60.17684, -33.42981 ], [ -60.17374, -33.44543 ], [ -60.17071, -33.46101 ], [ -60.16829, -33.47348 ], [ -60.16768, -33.4766 ], [ -60.1623, -33.50459 ], [ -60.15993, -33.50704 ], [ -60.13615, -33.53161 ], [ -60.12427, -33.54388 ], [ -60.1059, -33.56218 ], [ -60.08716, -33.57752 ], [ -60.07372, -33.58851 ], [ -60.06026, -33.59953 ], [ -60.04676, -33.61057 ], [ -60.030569192629372, -33.623839220278427 ], [ -60.02051, -33.63304 ], [ -60.00792, -33.64456 ], [ -59.99535, -33.65607 ], [ -59.98276, -33.66758 ], [ -59.97019, -33.67907 ], [ -59.95762, -33.69057 ], [ -59.95007, -33.69747 ], [ -59.90884156582878, -33.742509201088062 ], [ -59.892857038797509, -33.759906603379669 ], [ -59.82116, -33.83545 ], [ -59.79063, -33.86762 ], [ -59.73742, -33.90638 ], [ -59.69724, -33.93529 ], [ -59.69414, -33.93713 ], [ -59.64536, -33.97176 ], [ -59.56641, -34.02031 ], [ -59.42686, -34.10587 ], [ -59.41162210975218, -34.126163705526572 ] ] } },
									{ "type": "Feature", "properties": { "Name": "5ACAM1", "description": "LINEA = 5ACAM1<br>REGION = NORTE<br>CAMMESA = 223<br>ET_ORIGEN = Almafuerte<br>ET_DESTINO = Arroyo Cabral<br>TERNA = 1<br>KV = 500<br>ANO = 1983<br>LONGITUD = 89,8<br>SECCION = 282,6<br>CONDUCTOR = DOVE<br>MATERIAL = Al\/Ac<br>NRO_X = 4<br>HILO = 72,23<br>MAT_HILO = Acero<br>RESIST = 100<br>POT_NAT = 957,85<br>IMPEDANCIA = 261<br>CTE_ATENUA = 4,99E-05<br>CTE_FASE = 1,07E-03<br>VEL_PROPAG = 292700<br>", "tessellate": -1, "visibility": -1 }, "geometry": { "type": "LineString", "coordinates": [ [ -63.423365880974039, -32.498005594067578 ], [ -63.424142197672751, -32.49973483515685 ], [ -63.56523213420693, -32.456288196593583 ], [ -63.69468, -32.41602 ], [ -63.779895505962052, -32.388186183447523 ], [ -63.885645942914437, -32.353244027704548 ], [ -63.987106402358499, -32.319687133522123 ], [ -64.041658518319849, -32.301626690390727 ], [ -64.096319786805083, -32.283653808285912 ], [ -64.142791419592569, -32.268134287192353 ], [ -64.17039, -32.25877 ], [ -64.22075, -32.24208 ], [ -64.272742021608835, -32.223732916981859 ], [ -64.314657387715528, -32.207001342422309 ], [ -64.315804619681856, -32.206865473171703 ] ] } },
									{ "type": "Feature", "properties": { "Name": "5ACRO1", "description": "LINEA = 5ACRO1<br>REGION = NORTE<br>CAMMESA = 223<br>ET_ORIGEN = Rosario Oeste<br>ET_DESTINO = Arroyo Cabral<br>TERNA = 1<br>KV = 500<br>ANO = 1983<br>LONGITUD = 254,5<br>SECCION = 282,6<br>CONDUCTOR = DOVE<br>MATERIAL = Al\/Ac<br>NRO_X = 4<br>HILO = 72,23<br>MAT_HILO = Acero<br>RESIST = 100<br>POT_NAT = 957,85<br>IMPEDANCIA = 261<br>CTE_ATENUA = 4,99E-05<br>CTE_FASE = 1,07E-03<br>VEL_PROPAG = 292700<br>", "tessellate": -1, "visibility": -1 }, "geometry": { "type": "LineString", "coordinates": [ [ -60.780932652608861, -32.967018530734272 ], [ -60.781531959970138, -32.965895757279867 ], [ -60.786783062257918, -32.963769210588943 ], [ -60.79847223836321, -32.963692203131501 ], [ -60.8296355678632, -32.963479112790829 ], [ -60.837926663114679, -32.962059313559699 ], [ -60.879624029286212, -32.954644837507111 ], [ -60.920514029286217, -32.947654837507123 ], [ -60.982879858516121, -32.937562875977299 ], [ -61.024276365613062, -32.930483814885321 ], [ -61.065664445780193, -32.923768362063747 ], [ -61.106284443370143, -32.916596702378349 ], [ -61.138185765824787, -32.911139433240812 ], [ -61.147284029286219, -32.909934837507109 ], [ -61.17993598495535, -32.905945031789038 ], [ -61.209424029286218, -32.90119483750712 ], [ -61.248576200860967, -32.895258628042832 ], [ -61.308471875182491, -32.885644963139661 ], [ -61.370904029286223, -32.875124837507123 ], [ -61.407884029286222, -32.868944837507108 ], [ -61.412024029286208, -32.868214837507097 ], [ -61.448214029286213, -32.86188483750712 ], [ -61.452494029286207, -32.861134837507109 ], [ -61.513684029286217, -32.850424837507113 ], [ -61.574124029286217, -32.840104837507113 ], [ -61.636264029286217, -32.829634837507122 ], [ -61.69646402928624, -32.819574837507112 ], [ -61.700464029286231, -32.818904837507112 ], [ -62.08358, -32.75263 ], [ -62.16659, -32.73818 ], [ -62.20745, -32.73085 ], [ -62.24866, -32.72346 ], [ -62.28944, -32.71614 ], [ -62.35121, -32.70506 ], [ -62.41128, -32.69429 ], [ -62.460833745075163, -32.685419074515814 ], [ -62.692, -32.70272 ], [ -62.974292763203422, -32.62967265530731 ], [ -63.128283819485929, -32.585713363894747 ], [ -63.21082249061724, -32.563952853941323 ], [ -63.26099, -32.54914 ], [ -63.265089120143763, -32.54806524420858 ], [ -63.318855672784139, -32.532079077618867 ], [ -63.400586956583467, -32.507051005345119 ], [ -63.423793933638372, -32.499845441220522 ], [ -63.422889811699079, -32.498170496691174 ] ] } },
									{ "type": "Feature", "properties": { "Name": "5AMEM1", "description": "LINEA = 5AMEM1<br>REGION = NORTE<br>CAMMESA = 353<br>ET_ORIGEN = Almafuerte<br>ET_DESTINO = Embalse<br>TERNA = 1<br>KV = 500<br>ANO = 1984<br>LONGITUD = 12,1<br>SECCION = 282,6<br>CONDUCTOR = DOVE<br>MATERIAL = Al\/Ac<br>NRO_X = 4<br>HILO = 67,35<br>MAT_HILO = Acero<br>RESIST = 100<br>POT_NAT = 992,46<br>IMPEDANCIA = 251,9<br>CTE_ATENUA = 5,20E-05<br>CTE_FASE = 1,08E-03<br>VEL_PROPAG = 291400<br>", "tessellate": -1, "visibility": -1 }, "geometry": { "type": "LineString", "coordinates": [ [ -64.318911191498103, -32.206615256365879 ], [ -64.319936373522538, -32.206662322156099 ], [ -64.33333, -32.21092 ], [ -64.35044, -32.21549 ], [ -64.38838, -32.22571 ], [ -64.39583, -32.22775 ], [ -64.42495, -32.23151 ], [ -64.43608, -32.23294 ], [ -64.43992, -32.23492 ], [ -64.4422, -32.23406 ] ] } },
									{ "type": "Feature", "properties": { "Name": "5AMMA1", "description": "LINEA = 5AMMA1<br>REGION = NORTE<br>CAMMESA = 352<br>ET_ORIGEN = Almafuerte<br>ET_DESTINO = Malvinas Arg.<br>TERNA = 1<br>KV = 500<br>ANO = 1987<br>LONGITUD = 104,3<br>SECCION = 282,6<br>CONDUCTOR = DOVE<br>MATERIAL = Al\/Ac<br>NRO_X = 4<br>HILO = 67,35<br>MAT_HILO = Acero<br>RESIST = 100<br>POT_NAT = 987,75<br>IMPEDANCIA = 253,1<br>CTE_ATENUA = 5,19E-05<br>CTE_FASE = 1,08E-03<br>VEL_PROPAG = 290900<br>", "tessellate": -1, "visibility": -1 }, "geometry": { "type": "LineString", "coordinates": [ [ -64.315712708160262, -32.206266879952452 ], [ -64.314958139479614, -32.206211105508856 ], [ -64.311511070112047, -32.203560281349382 ], [ -64.30826, -32.18991 ], [ -64.30835, -32.18638 ], [ -64.3052, -32.17961 ], [ -64.29054, -32.14792 ], [ -64.28309, -32.132 ], [ -64.28018, -32.12574 ], [ -64.27706, -32.11506 ], [ -64.26303, -32.06713 ], [ -64.24956, -32.04901 ], [ -64.22762, -32.01912 ], [ -64.20814, -31.98853 ], [ -64.20218, -31.97917 ], [ -64.1988, -31.97266 ], [ -64.18194, -31.94022 ], [ -64.17341, -31.92382 ], [ -64.16486, -31.90734 ], [ -64.146449658942416, -31.871176529949739 ], [ -64.13094, -31.84196 ], [ -64.11447, -31.80891 ], [ -64.09808, -31.77586 ], [ -64.090224870101878, -31.75990920420767 ], [ -64.08300265430141, -31.74381253234273 ], [ -64.077806295275678, -31.72640315479077 ], [ -64.072864335041459, -31.70982082808997 ], [ -64.070674681018758, -31.702680429484989 ], [ -64.065268355846982, -31.693176436421389 ], [ -64.055932468831259, -31.676817790231372 ], [ -64.047774090928215, -31.662365277148069 ], [ -64.038817350870886, -31.64656849926488 ], [ -64.022035240557983, -31.614850561158651 ], [ -64.00524, -31.58276 ], [ -63.99706, -31.56751 ], [ -63.96466825810721, -31.52509323818591 ], [ -63.959474652451028, -31.485223958663511 ], [ -63.943865839851973, -31.4413474709715 ], [ -63.920988698360553, -31.392816011770311 ], [ -63.914978071546642, -31.359814275752999 ], [ -63.912694531526057, -31.343125515866781 ], [ -63.912597959419458, -31.341625449504559 ] ] } },
									{ "type": "Feature", "properties": { "Name": "5LAVRE1", "description": "LINEA = 5LAVRE1<br>REGION = NORTE<br>CAMMESA = 357<br>ET_ORIGEN = Recreo<br>ET_DESTINO = Lavalle<br>TERNA = 1<br>KV = 500<br>ANO = 1987<br>LONGITUD = 122,9 km<br>SECCION = 282,6<br>CONDUCTOR = DOVE<br>MATERIAL = Al\/Ac<br>NRO_X = 4<br>HILO = 67,35<br>MAT_HILO = Acero<br>RESIST = 100<br>POT_NAT = 978,86<br>IMPEDANCIA = 255,4<br>CTE_ATENUA = 5,15E-05<br>CTE_FASE = 1,08E-03<br>VEL_PROPAG = 292200<br>", "tessellate": -1, "visibility": -1 }, "geometry": { "type": "LineString", "coordinates": [ [ -65.056485875111605, -29.259331183328481 ], [ -65.055899999914999, -29.259029999647542 ], [ -65.05151, -29.20443 ], [ -65.04806, -29.16437 ], [ -65.04946, -29.12323 ], [ -65.05096, -29.08216 ], [ -65.05247, -29.04072 ], [ -65.05472, -28.97898 ], [ -65.05612, -28.94209 ], [ -65.05626, -28.9379 ], [ -65.05699, -28.91746 ], [ -65.05858, -28.87629 ], [ -65.06096, -28.8141 ], [ -65.06257, -28.77249 ], [ -65.06419, -28.73104 ], [ -65.06574, -28.69154 ], [ -65.06748, -28.65007 ], [ -65.06922, -28.60467 ], [ -65.07196, -28.57032 ], [ -65.07587, -28.52124 ], [ -65.07758, -28.50458 ], [ -65.07823, -28.49219 ], [ -65.08191, -28.44686 ], [ -65.08524, -28.4058 ], [ -65.08854, -28.36488 ], [ -65.09188, -28.32365 ], [ -65.09525, -28.2825 ], [ -65.09623, -28.27045 ], [ -65.09643, -28.26204 ], [ -65.09744, -28.21998 ], [ -65.09794, -28.19897 ], [ -65.09811, -28.19181 ], [ -65.09821, -28.18757 ], [ -65.107503563862224, -28.159281658893569 ], [ -65.106199534151443, -28.158916393524681 ] ] } },
									{ "type": "Feature", "properties": { "Name": "5ATRA1", "description": "LINEA = 5ATRA1<br>REGION = NORTE<br>CAMMESA = -<br>ET_ORIGEN = Ramallo<br>ET_DESTINO = Atucha<br>TERNA = 1<br>KV = 500<br>ANO = 1981<br>LONGITUD = 117,2<br>SECCION = 322,0<br>CONDUCTOR = KINGBIRD<br>MATERIAL = Al\/Ac<br>NRO_X = 4<br>HILO = 67,35<br>MAT_HILO = Acero<br>RESIST = 100<br>POT_NAT = 990,49<br>IMPEDANCIA = 252,4<br>CTE_ATENUA = 4,54E-05<br>CTE_FASE = 1,07E-03<br>VEL_PROPAG = 292400<br>", "tessellate": -1, "visibility": -1 }, "geometry": { "type": "LineString", "coordinates": [ [ -60.181145629944858, -33.411270871939067 ], [ -60.18092, -33.41275 ], [ -60.1895, -33.42236 ], [ -60.19823, -33.42403 ], [ -60.19965, -33.42618 ], [ -60.200034507415502, -33.426439748887638 ], [ -60.18647, -33.42793 ], [ -60.16885, -33.42943 ], [ -60.16572, -33.43257 ], [ -60.13446, -33.46395 ], [ -60.11879, -33.47967 ], [ -60.08749, -33.51105 ], [ -60.05642, -33.54252 ], [ -60.02513, -33.57422 ], [ -59.99385, -33.60588 ], [ -59.96253, -33.63752 ], [ -59.93124, -33.66914 ], [ -59.9218, -33.67867 ], [ -59.89359, -33.69391 ], [ -59.87516, -33.70581 ], [ -59.83645, -33.7302 ], [ -59.79776, -33.75465 ], [ -59.75927, -33.77967 ], [ -59.72172, -33.80404 ], [ -59.68409, -33.82845 ], [ -59.64702, -33.85242 ], [ -59.64004, -33.85693 ], [ -59.6008, -33.86116 ], [ -59.5521, -33.8664 ], [ -59.51403, -33.87044 ], [ -59.50552, -33.87358 ], [ -59.48519, -33.88108 ], [ -59.48107, -33.8826 ], [ -59.46497, -33.88998 ], [ -59.42846, -33.9067 ], [ -59.42407, -33.90836 ], [ -59.40165, -33.91683 ], [ -59.37897, -33.92539 ], [ -59.37594, -33.92441 ], [ -59.35786, -33.92925 ], [ -59.33564, -33.93519 ], [ -59.28819, -33.94792 ], [ -59.24189, -33.96141 ], [ -59.22228, -33.96722 ], [ -59.2182, -33.96843 ], [ -59.21396, -33.96969 ], [ -59.21252, -33.97163 ], [ -59.2107, -33.974 ], [ -59.20701, -33.97397 ], [ -59.205094764832637, -33.972909558339033 ], [ -59.205059978474083, -33.971865230431867 ] ] } },
									{ "type": "Feature", "properties": { "Name": "5BRCB1", "description": "LINEA = 5BRCB1<br>REGION = NORTE<br>CAMMESA = ?<br>ET_ORIGEN = El Bracho<br>ET_DESTINO = Cobos<br>TERNA = 1<br>KV = 500<br>ANO = 2010<br>LONGITUD = 284,3 km", "tessellate": -1, "visibility": -1 }, "geometry": { "type": "LineString", "coordinates": [ [ -65.047782777777769, -24.74728805555554 ], [ -65.047634722222213, -24.74808916666667 ], [ -65.0366338888889, -24.80756222222222 ], [ -65.032146944444449, -24.831805277777779 ], [ -65.02609, -24.848099444444429 ], [ -64.997895, -24.9238925 ], [ -64.99217055555556, -24.939269444444449 ], [ -64.998189311475429, -24.982336969362169 ], [ -64.998679887385265, -24.98651110535614 ], [ -64.999014722222199, -25.04082750000002 ], [ -65.025303611111099, -25.137289444444441 ], [ -64.986620277777803, -25.177785 ], [ -64.971029166666654, -25.194096111111111 ], [ -64.957406388888913, -25.206035 ], [ -64.942191666666673, -25.219245555555538 ], [ -64.922214444444464, -25.236518611111119 ], [ -64.93345444444445, -25.293283055555548 ], [ -64.939300277777775, -25.31496972222223 ], [ -64.94655916666666, -25.333694166666682 ], [ -64.951206944444451, -25.3455075 ], [ -64.945892500000014, -25.3518986111111 ], [ -64.920524444444453, -25.382393888888881 ], [ -64.890731666666667, -25.418183611111129 ], [ -64.876311666666652, -25.435496666666658 ], [ -64.846313055555541, -25.47149388888889 ], [ -64.816422499999987, -25.507333888888891 ], [ -64.798108333333332, -25.529280555555552 ], [ -64.798287777777773, -25.540851944444459 ], [ -64.798613055555563, -25.56182638888891 ], [ -64.799305833333335, -25.606446944444428 ], [ -64.799636666666672, -25.627729722222231 ], [ -64.7943725, -25.646081388888899 ], [ -64.782740555555563, -25.68661333333333 ], [ -64.770972777777772, -25.72759 ], [ -64.758825833333333, -25.769858333333321 ], [ -64.746977222222228, -25.81105972222224 ], [ -64.734758888888891, -25.853518055555561 ], [ -64.72224, -25.896988611111119 ], [ -64.711160277777779, -25.93543583333334 ], [ -64.699556944444453, -25.975672777777788 ], [ -64.687094166666668, -26.01886027777778 ], [ -64.67534666666667, -26.05954055555555 ], [ -64.663449722222225, -26.100708611111109 ], [ -64.652651666666671, -26.13805083333332 ], [ -64.638585555555565, -26.186657777777778 ], [ -64.660102222222221, -26.26911 ], [ -64.647852777777786, -26.30579222222223 ], [ -64.654636944444448, -26.346256944444441 ], [ -64.662324444444437, -26.392072500000019 ], [ -64.670783888888906, -26.44244194444445 ], [ -64.679299166666681, -26.453574444444449 ], [ -64.704741666666663, -26.486821111111119 ], [ -64.7304438888889, -26.520382500000011 ], [ -64.758109444444443, -26.5564797222222 ], [ -64.78618583333332, -26.593083888888891 ], [ -64.799925555555546, -26.61098611111111 ], [ -64.813721111111121, -26.628953611111118 ], [ -64.8245275, -26.643023333333328 ], [ -64.864458055555545, -26.660611388888888 ], [ -64.903576388888894, -26.692329166666671 ], [ -64.939099722222224, -26.721106388888892 ], [ -64.979080555555555, -26.753466388888871 ], [ -64.984616111111109, -26.758269166666651 ], [ -64.98813388888891, -26.77068 ], [ -64.998058333333333, -26.808828055555551 ], [ -65.009202777777801, -26.851632222222239 ], [ -65.020152222222208, -26.89365305555555 ], [ -65.022136666666682, -26.901264444444461 ], [ -65.030881944444445, -26.911374444444451 ], [ -65.044634722222213, -26.92726805555554 ], [ -65.059456944444435, -26.943765277777779 ], [ -65.074754166666665, -26.95822416666666 ], [ -65.091643333333337, -26.972154722222239 ], [ -65.111095833333351, -26.985312222222241 ], [ -65.134275, -27.0009825 ], [ -65.153163333333325, -27.00044583333333 ], [ -65.161484722222227, -27.00020833333333 ], [ -65.163506111111104, -26.999084722222211 ], [ -65.164941388888892, -26.996684166666672 ], [ -65.164871111111111, -26.995965 ] ] } },
									{ "type": "Feature", "properties": { "Name": "5BRLAV1", "description": "LINEA = 5BRLAV1<br>REGION = NORTE<br>CAMMESA = 357<br>ET_ORIGEN = Lavalle<br>ET_DESTINO = El Bracho<br>TERNA = 1<br>KV = 500<br>ANO = 1987<br>LONGITUD = 132,3 km<br>SECCION = 282,6<br>CONDUCTOR = DOVE<br>MATERIAL = Al\/Ac<br>NRO_X = 4<br>HILO = 67,35<br>MAT_HILO = Acero<br>RESIST = 100<br>POT_NAT = 978,86<br>IMPEDANCIA = 255,4<br>CTE_ATENUA = 5,15E-05<br>CTE_FASE = 1,08E-03<br>VEL_PROPAG = 292200<br>", "tessellate": -1, "visibility": -1 }, "geometry": { "type": "LineString", "coordinates": [ [ -65.106252942459349, -28.158568741040089 ], [ -65.107620750105667, -28.158954521650148 ], [ -65.12056, -28.11891 ], [ -65.13043, -28.0788 ], [ -65.14042, -28.0384 ], [ -65.15021, -27.99905 ], [ -65.15878, -27.95864 ], [ -65.16043, -27.9505 ], [ -65.16341, -27.93832 ], [ -65.17823, -27.87865 ], [ -65.18803, -27.83944 ], [ -65.191, -27.82762 ], [ -65.19328, -27.81995 ], [ -65.20249, -27.78889 ], [ -65.21467, -27.74066 ], [ -65.22491, -27.70013 ], [ -65.23507, -27.65998 ], [ -65.24533, -27.6198 ], [ -65.25563, -27.57945 ], [ -65.26383, -27.54735 ], [ -65.26286, -27.54046 ], [ -65.25797, -27.50568 ], [ -65.25296, -27.46995 ], [ -65.24791, -27.43385 ], [ -65.24288, -27.39815 ], [ -65.23786, -27.36254 ], [ -65.23274, -27.32617 ], [ -65.22763, -27.29188 ], [ -65.22236, -27.25731 ], [ -65.21657, -27.22281 ], [ -65.21029, -27.18871 ], [ -65.20377, -27.15332 ], [ -65.1972, -27.1176 ], [ -65.19066, -27.08199 ], [ -65.1841, -27.04631 ], [ -65.17804, -27.01393 ], [ -65.170777222975389, -27.005267755872069 ], [ -65.16539, -26.99667 ], [ -65.165148246637102, -26.995961685152238 ] ] } },
									{ "type": "Feature", "properties": { "Name": "5CBMQ1", "description": "LINEA = 5CBMQ1<br>REGION = NORTE<br>ET_ORIGEN = Cobos<br>ET_DESTINO = Monte Quemado<br>TERNA = 1<br>KV = 500<br>ANO = 2011<br>LONGITUD = 298,2 km<br>", "tessellate": -1, "visibility": -1 }, "geometry": { "type": "LineString", "coordinates": [ [ -65.047418627763705, -24.747273873438498 ], [ -65.046828702005655, -24.74941533806663 ], [ -65.038380287666897, -24.793408167980189 ], [ -65.03116383814239, -24.8315796003873 ], [ -64.99124307135655, -24.93901264148062 ], [ -64.997606237083488, -24.985261881837889 ], [ -64.99802342553815, -25.040809810351941 ], [ -65.024202878288435, -25.137007957651289 ], [ -64.969860745083977, -25.19426264770474 ], [ -64.922157966282469, -25.234612191969209 ], [ -64.920916790946166, -25.237591104192511 ], [ -64.92259853838344, -25.243389160917641 ], [ -64.93299992248096, -25.2960768320334 ], [ -64.935383989425759, -25.307815015050259 ], [ -64.938201668414877, -25.315028473189258 ], [ -64.949888285796561, -25.344798597393439 ], [ -64.922475275522416, -25.377285485182991 ], [ -64.752205317117514, -25.392661063537162 ], [ -64.495547789430788, -25.431104563900281 ], [ -64.012775298173992, -25.440821171240369 ], [ -63.845224129030591, -25.496773047321579 ], [ -63.667677405926902, -25.524047267426312 ], [ -63.417843888888882, -25.583355 ], [ -62.819079907765392, -25.845323832062821 ], [ -62.817672164664593, -25.8457584928302 ] ] } },
									{ "type": "Feature", "properties": { "Name": "5CBSO1", "description": "LINEA = 5CBSO1<br>REGION = NORTE<br>ET_ORIGEN = Cobos<br>ET_DESTINO = Sanjuancito<br>TERNA = 1<br>KV = 500<br>ANO = 2011<br>LONGITUD = 46,7 km<br>", "tessellate": -1, "visibility": -1 }, "geometry": { "type": "LineString", "coordinates": [ [ -65.0483025, -24.74512972222222 ], [ -65.048409988693734, -24.74414177000013 ], [ -65.047308541207187, -24.743369974105001 ], [ -65.021737036048066, -24.741911632727589 ], [ -65.006907725945922, -24.732896522602989 ], [ -65.002687767788956, -24.664825279208991 ], [ -65.063892061685507, -24.515721787204601 ], [ -65.047222368736556, -24.483271074552079 ], [ -65.040768359291619, -24.46775586225672 ], [ -65.019440466554457, -24.42218398333808 ], [ -65.017256457491158, -24.418235023586629 ], [ -65.001363401788694, -24.383576346905571 ], [ -64.998942765755316, -24.381286227543448 ], [ -64.996715250261914, -24.379249351239459 ], [ -64.996238705046096, -24.37832867172277 ], [ -64.996904326744115, -24.377436119876918 ] ] } },
									{ "type": "Feature", "properties": { "Name": "5CNRO1", "description": "LINEA = 5CNRO1<br>REGION = NORTE<br>CAMMESA = 222<br>ET_ORIGEN = Rosario Oeste<br>ET_DESTINO = Coronda<br>TERNA = 1<br>KV = 500<br>ANO = 1981<br>LONGITUD = 65,1<br>SECCION = 304,3<br>CONDUCTOR = 300\/50<br>MATERIAL = Al\/Ac<br>NRO_X = 4<br>HILO = 67,35<br>MAT_HILO = Acero<br>RESIST = 100<br>POT_NAT = 995,62<br>IMPEDANCIA = 251,1<br>CTE_ATENUA = 4,88E-05<br>CTE_FASE = 1,08E-03<br>VEL_PROPAG = 290700<br>", "tessellate": -1, "visibility": -1 }, "geometry": { "type": "LineString", "coordinates": [ [ -60.780332434158289, -32.966998321656142 ], [ -60.780470828621411, -32.965199193635698 ], [ -60.78641, -32.96264 ], [ -60.81643, -32.96245 ], [ -60.82069, -32.96242 ], [ -60.82931, -32.96236 ], [ -60.83691, -32.96104 ], [ -60.85668, -32.95763 ], [ -60.87261, -32.95487 ], [ -60.87607, -32.95272 ], [ -60.90267, -32.93604 ], [ -60.93433, -32.90134 ], [ -60.94044, -32.87039 ], [ -60.94738, -32.83523 ], [ -60.95439, -32.7997 ], [ -60.96139, -32.76426 ], [ -60.96835, -32.72894 ], [ -60.97526, -32.69382 ], [ -60.979787032053473, -32.670782143177632 ], [ -60.955144668165197, -32.663745131788879 ], [ -60.945092049765933, -32.660869551652148 ], [ -60.931160200434711, -32.657669815301212 ], [ -60.907979346194153, -32.652344624547418 ], [ -60.893972172182181, -32.649125464158139 ], [ -60.885773362001807, -32.644692851204283 ], [ -60.846938843451753, -32.623706165984473 ], [ -60.835221548083403, -32.604399297264401 ], [ -60.819972954042157, -32.579267102080401 ], [ -60.807542173427883, -32.57822656371745 ], [ -60.799596640144372, -32.57756076767194 ], [ -60.79584314650559, -32.578214863566942 ], [ -60.794455727862797, -32.578583642091559 ] ] } },
									{ "type": "Feature", "properties": { "Name": "5CNRO2", "description": "LINEA = 5CNRO1<br>REGION = NORTE<br>ET_ORIGEN = Rosario Oeste<br>ET_DESTINO = Coronda<br>TERNA = 1<br>KV = 500<br>ANO = 2014<br>LONGITUD = 65,7<br>", "tessellate": -1, "visibility": -1 }, "geometry": { "type": "LineString", "coordinates": [ [ -60.781276172955273, -32.967013432322517 ], [ -60.780801109973439, -32.966258173999947 ], [ -60.781007321549261, -32.9655502405273 ], [ -60.786639389248592, -32.963176722149491 ], [ -60.829510361974833, -32.962888653427022 ], [ -60.908033078475803, -32.949346786401406 ], [ -60.908602869522547, -32.948290772920053 ], [ -60.910918297671337, -32.93765683178453 ], [ -60.911592761260167, -32.933936087200607 ], [ -60.913592013758617, -32.927814697519359 ], [ -60.914798096079807, -32.924446383290253 ], [ -60.917170179154752, -32.92138534219162 ], [ -60.923127183506821, -32.914921411292852 ], [ -60.928611217120647, -32.908778827070989 ], [ -60.92813811081308, -32.906914093030608 ], [ -60.933610187456608, -32.900672284685619 ], [ -60.941721752208089, -32.859067078916347 ], [ -60.954283530984142, -32.795821627504047 ], [ -60.96690937691794, -32.731420570621651 ], [ -60.97838069940024, -32.672714561712382 ], [ -60.97634966162596, -32.670405181061817 ], [ -60.956470066206293, -32.664816403580311 ], [ -60.944715966943789, -32.661470508466721 ], [ -60.911651315403191, -32.653913241994907 ], [ -60.893790033759807, -32.649803240256617 ], [ -60.846382995390023, -32.624089494898001 ], [ -60.837010401180173, -32.608438439615981 ], [ -60.819575735451281, -32.579990356253568 ], [ -60.800505417629282, -32.57827408184442 ], [ -60.79596519979409, -32.578778039552731 ], [ -60.794624897352257, -32.579322385902323 ] ] } },
									{ "type": "Feature", "properties": { "Name": "5LAVSES1", "description": "LINEA = LAVSES1<br>REGION = NORTE<br>ET_ORIGEN = Lavalle<br>ET_DESTINO = Santiago<br>TERNA = 1<br>KV = 500<br>ANO = 2015<br>LONGITUD = 86,4 km<br>", "tessellate": 1, "visibility": -1 }, "geometry": { "type": "LineString", "coordinates": [ [ -65.103891275337403, -28.157954892654239 ], [ -65.098833343391561, -28.15746662679528 ], [ -65.024113720968302, -28.170852635612199 ], [ -64.839146535002726, -28.133550701587531 ], [ -64.825763705326139, -28.128302455609141 ], [ -64.815782935017026, -28.127772983475051 ], [ -64.806093342932954, -28.127536040776629 ], [ -64.75171826181429, -28.099834274350499 ], [ -64.662857324085167, -28.054312736451219 ], [ -64.607708320984742, -28.00611455929873 ], [ -64.544948954264811, -27.96535918738811 ], [ -64.469381022136716, -27.912731323835018 ], [ -64.465959039676832, -27.909784974716441 ], [ -64.392787155641656, -27.843010901244281 ], [ -64.354251157662503, -27.843243482771779 ], [ -64.347956314310665, -27.83912963055128 ] ] } },
									{ "type": "Feature", "properties": { "Name": "5CNST1", "description": "LINEA = 5CNST1<br>REGION = NORTE<br>CAMMESA = 222<br>ET_ORIGEN = Coronda<br>ET_DESTINO =Santo Tome<br>TERNA = 1<br>KV = 500<br>ANO = 1981<br>LONGITUD = 138,5<br>SECCION = 304,3<br>CONDUCTOR = 300\/50<br>MATERIAL = Al\/Ac<br>NRO_X = 4<br>HILO = 67,35<br>MAT_HILO = Acero<br>RESIST = 100<br>POT_NAT = 995,62<br>IMPEDANCIA = 251,1<br>CTE_ATENUA = 4,88E-05<br>CTE_FASE = 1,08E-03<br>VEL_PROPAG = 290700<br>", "tessellate": -1, "visibility": -1 }, "geometry": { "type": "LineString", "coordinates": [ [ -60.794532846615262, -32.578010308265242 ], [ -60.795921811630578, -32.577617561696712 ], [ -60.799666736574963, -32.576932785067349 ], [ -60.820449079073981, -32.578678667984207 ], [ -60.838511422036817, -32.608490480033943 ], [ -60.847545470588869, -32.623287113057891 ], [ -60.86971012320506, -32.635268183766492 ], [ -60.894256819023269, -32.648530593604981 ], [ -60.912915077464007, -32.652818919677991 ], [ -60.945377105660171, -32.660276855701937 ], [ -60.960061966293587, -32.664489139348859 ], [ -60.979919457546238, -32.670229873021782 ], [ -60.98192, -32.65988 ], [ -60.9854, -32.64214 ], [ -60.98887, -32.62447 ], [ -60.99415, -32.59728 ], [ -60.99484, -32.59372 ], [ -60.99494, -32.59011 ], [ -60.99545, -32.57219 ], [ -60.99644, -32.53637 ], [ -60.99743, -32.50074 ], [ -60.99843, -32.46514 ], [ -60.99944, -32.42981 ], [ -61.00046, -32.39434 ], [ -61.00148, -32.35862 ], [ -61.00223, -32.32284 ], [ -61.0027, -32.28716 ], [ -61.00314, -32.25143 ], [ -61.00358, -32.21589 ], [ -61.00403, -32.18047 ], [ -61.00451, -32.14496 ], [ -61.00499, -32.10943 ], [ -61.00564, -32.0736 ], [ -61.00571, -32.07008 ], [ -61.0063, -32.03804 ], [ -61.00696, -32.00269 ], [ -61.00795, -31.94948 ], [ -61.00847, -31.92115 ], [ -61.00672, -31.91405 ], [ -60.99816, -31.87922 ], [ -60.98954, -31.84407 ], [ -60.9887, -31.84063 ], [ -60.97865, -31.79948 ], [ -60.97531, -31.79291 ], [ -60.95861, -31.76008 ], [ -60.93507, -31.7138 ], [ -60.90405, -31.69057 ], [ -60.87602, -31.66956 ], [ -60.87312, -31.66761 ], [ -60.86392, -31.6614 ], [ -60.863333143385582, -31.659776435855498 ] ] } },
									{ "type": "Feature", "properties": { "Name": "5EMRG1", "description": "LINEA = 5EMRG1<br>REGION = NORTE<br>CAMMESA = 354<br>ET_ORIGEN = Embalse<br>ET_DESTINO = Rio Grande<br>TERNA = 1<br>KV = 500<br>ANO = 1984<br>LONGITUD = 30,0<br>SECCION = 282,6<br>CONDUCTOR = DOVE<br>MATERIAL = Al\/Ac<br>NRO_X = 4<br>HILO = 67,35<br>MAT_HILO = Acero<br>RESIST = 100<br>POT_NAT = 992,46<br>IMPEDANCIA = 251,9<br>CTE_ATENUA = 5,20E-05<br>CTE_FASE = 1,08E-03<br>VEL_PROPAG = 291400<br>", "tessellate": -1, "visibility": -1 }, "geometry": { "type": "LineString", "coordinates": [ [ -64.44245, -32.23438 ], [ -64.44113, -32.2352 ], [ -64.44139, -32.27823 ], [ -64.47684, -32.31159 ], [ -64.48722, -32.31412 ], [ -64.50806, -32.30885 ], [ -64.54665, -32.29909 ], [ -64.58344, -32.28986 ], [ -64.60251, -32.28508 ], [ -64.61885, -32.25733 ], [ -64.63205, -32.23517 ], [ -64.63403, -32.22683 ], [ -64.63490520259522, -32.222741551153447 ], [ -64.635871540017234, -32.221890015223373 ] ] } },
									{ "type": "Feature", "properties": { "Name": "5GMLU1", "description": "LINEA = 5GMLU1<br>REGION = NORTE<br>CAMMESA = -<br>ET_ORIGEN = Gran Mendoza<br>ET_DESTINO = Lujan<br>TERNA = 1<br>KV = 500<br>ANO = 1998<br>LONGITUD = 257,5<br>SECCION = 283,6<br>CONDUCTOR = DOVE<br>MATERIAL = Al\/Ac<br>NRO_X = 4<br>HILO = 67,35<br>MAT_HILO = Acero<br>RESIST = 101<br>POT_NAT = 975,80<br>IMPEDANCIA = 256,2<br>CTE_ATENUA = 5,13E-05<br>CTE_FASE = 1,08E-03<br>VEL_PROPAG = 291101<br>", "tessellate": -1, "visibility": -1 }, "geometry": { "type": "LineString", "coordinates": [ [ -66.066279346060867, -32.367734150336098 ], [ -66.066461614981577, -32.367464946383343 ], [ -66.07381, -32.37068 ], [ -66.11158, -32.38725 ], [ -66.14939, -32.4037 ], [ -66.1873, -32.42017 ], [ -66.22503, -32.43658 ], [ -66.26286, -32.45303 ], [ -66.30084, -32.46957 ], [ -66.3386, -32.48599 ], [ -66.37664, -32.5025 ], [ -66.41439, -32.51886 ], [ -66.45228, -32.53527 ], [ -66.4902, -32.55166 ], [ -66.52793, -32.56788 ], [ -66.5681, -32.58517 ], [ -66.6064, -32.60173 ], [ -66.64453, -32.61819 ], [ -66.6827, -32.63461 ], [ -66.73998, -32.65922 ], [ -66.77809, -32.67557 ], [ -66.81616, -32.69188 ], [ -66.85481, -32.70844 ], [ -66.89258, -32.7246 ], [ -66.92666, -32.73916 ], [ -66.93058, -32.74083 ], [ -66.9615, -32.75403 ], [ -66.96966, -32.75586 ], [ -67.01087, -32.76511 ], [ -67.05243, -32.77444 ], [ -67.0939, -32.78378 ], [ -67.13545, -32.79307 ], [ -67.178, -32.80255 ], [ -67.18569, -32.8043 ], [ -67.19772, -32.80407 ], [ -67.219, -32.80366 ], [ -67.22804, -32.80349 ], [ -67.25545, -32.81949 ], [ -67.28424, -32.83587 ], [ -67.28803, -32.83762 ], [ -67.29146, -32.83874 ], [ -67.3114, -32.84521 ], [ -67.33119, -32.85163 ], [ -67.37124, -32.86462 ], [ -67.39117, -32.87107 ], [ -67.43163, -32.88416 ], [ -67.47116, -32.897 ], [ -67.5115, -32.91005 ], [ -67.55119, -32.92288 ], [ -67.59104, -32.93576 ], [ -67.63091, -32.94866 ], [ -67.67012, -32.96131 ], [ -67.71006, -32.97413 ], [ -67.74944, -32.9868 ], [ -67.78598, -32.99856 ], [ -67.78979, -32.9999 ], [ -67.80885, -33.00707 ], [ -67.84859, -33.02201 ], [ -67.86946, -33.02015 ], [ -67.91192, -33.01637 ], [ -67.9545, -33.01266 ], [ -67.99707, -33.00905 ], [ -68.03961, -33.00549 ], [ -68.10161, -33.00028 ], [ -68.14071, -32.99697 ], [ -68.20428, -32.99134 ], [ -68.20856, -32.991 ], [ -68.22948, -32.98951 ], [ -68.25052, -32.98763 ], [ -68.27144, -32.98641 ], [ -68.2756, -32.98614 ], [ -68.29178, -32.98409 ], [ -68.29584, -32.98358 ], [ -68.31249, -32.98209 ], [ -68.35128, -32.97815 ], [ -68.39341, -32.97402 ], [ -68.41906, -32.97167 ], [ -68.44049, -32.98378 ], [ -68.44847, -32.99211 ], [ -68.46703, -33.01147 ], [ -68.46948, -33.01403 ], [ -68.48754, -33.0236 ], [ -68.50698, -33.04252 ], [ -68.53568, -33.06879 ], [ -68.5596, -33.09051 ], [ -68.57446, -33.09107 ], [ -68.57986, -33.09524 ], [ -68.58056, -33.09675 ] ] } },
									{ "type": "Feature", "properties": { "Name": "5GMRDI1", "description": "LINEA = 5GMRDI1<br>REGION = NORTE<br>CAMMESA = -<br>ET_ORIGEN = Gran Mendoza<br>ET_DESTINO = Rio Diamante<br>TERNA = 1<br>KV = 500<br>ANO = 2011<br>LONGITUD = 257,5<br>SECCION = 283,6<br>CONDUCTOR = DOVE<br>MATERIAL = Al\/Ac<br>NRO_X = 4<br>HILO = 67,35<br>MAT_HILO = Acero<br>RESIST = 101<br>POT_NAT = 975,80<br>IMPEDANCIA = 256,2<br>CTE_ATENUA = 5,13E-05<br>CTE_FASE = 1,08E-03<br>VEL_PROPAG = 291101<br>", "tessellate": -1, "visibility": -1 }, "geometry": { "type": "LineString", "coordinates": [ [ -68.582132567297933, -33.099550666522283 ], [ -68.582918743616233, -33.100605331732901 ], [ -68.58377055720365, -33.101182250490929 ], [ -68.586627591532505, -33.100789857760518 ], [ -68.596683560544804, -33.10209087402437 ], [ -68.619440721812182, -33.100757063770708 ], [ -68.648210974339293, -33.109835321794719 ], [ -68.669323316169027, -33.119724468601902 ], [ -68.679575103179786, -33.121071096539062 ], [ -68.693342307090944, -33.132171499932817 ], [ -68.709714324878576, -33.176280313468787 ], [ -68.71017709488693, -33.191226413130721 ], [ -68.69353547016631, -33.250749063265317 ], [ -68.665205132883443, -33.306439154714511 ], [ -68.662087295571084, -33.339536144476519 ], [ -68.885575383463049, -33.5718910521108 ], [ -68.948228510811703, -33.636816220361951 ], [ -68.949799231498773, -33.675762231184272 ], [ -68.956958188763338, -33.743622057930828 ], [ -68.953724790549586, -33.768886378647892 ], [ -68.961858727019475, -33.790755455916937 ], [ -68.98698571815099, -33.898036694212017 ], [ -68.925204524638247, -33.992854011962287 ], [ -68.822914129377324, -34.147586066532739 ], [ -68.733205409101714, -34.283337632829053 ], [ -68.691050837368422, -34.380794283372111 ], [ -68.643928103299871, -34.488914491324849 ], [ -68.603704227456774, -34.534033990481767 ], [ -68.59735992962564, -34.543951557351768 ], [ -68.594920404005336, -34.547575199585793 ], [ -68.59414449377698, -34.54847422295515 ] ] } },
									{ "type": "Feature", "properties": { "Name": "5GMSJ1", "description": "LINEA = 5GMSJ1<br>REGION = NORTE<br>CAMMESA = -<br>ET_ORIGEN = Gran Mendoza<br>ET_DESTINO = San Juan<br>TERNA = 0<br>KV = 500<br>ANO = 2007<br>LONGITUD = 178,0 km<br>", "tessellate": -1, "visibility": -1 }, "geometry": { "type": "LineString", "coordinates": [ [ -68.62045865577366, -31.564973947075771 ], [ -68.621305741666163, -31.564933548836208 ], [ -68.623381763519291, -31.56716714794225 ], [ -68.63568333, -31.60448333 ], [ -68.64118333, -31.62116667 ], [ -68.631368349279597, -31.646552929619482 ], [ -68.6155, -31.68803333 ], [ -68.596466669999984, -31.70798333 ], [ -68.596013130289307, -31.721492571883989 ], [ -68.594940886809368, -31.734683473699778 ], [ -68.59418333, -31.73925 ], [ -68.59228101383988, -31.74773043852986 ], [ -68.588568497328325, -31.757906491527589 ], [ -68.579745081459038, -31.778642140533211 ], [ -68.57486839134441, -31.792514890614651 ], [ -68.57251667, -31.8019 ], [ -68.57043333, -31.81345 ], [ -68.56801667, -31.82561667 ], [ -68.566716670000019, -31.834916669999981 ], [ -68.5636, -31.8573 ], [ -68.55745, -31.9014 ], [ -68.55143333, -31.94465 ], [ -68.53388333, -31.96045 ], [ -68.49711667, -31.99356667 ], [ -68.478566670000021, -32.01026667 ], [ -68.48308333, -32.03126667 ], [ -68.49295, -32.07713333 ], [ -68.5027, -32.12256667 ], [ -68.5123, -32.164283329999982 ], [ -68.52296667, -32.20995 ], [ -68.53255, -32.25096667 ], [ -68.54435, -32.301516670000012 ], [ -68.5475, -32.315016670000013 ], [ -68.54901667, -32.32331667 ], [ -68.54998333, -32.331916670000012 ], [ -68.5478, -32.367766670000023 ], [ -68.5467, -32.38921667 ], [ -68.5455, -32.413116669999987 ], [ -68.54431667, -32.43628333 ], [ -68.54311667, -32.45986667 ], [ -68.54196667, -32.48243333 ], [ -68.540783330000011, -32.505716670000012 ], [ -68.53961667, -32.52895 ], [ -68.53845, -32.551716669999983 ], [ -68.53726667, -32.57491667 ], [ -68.53706667, -32.57896667 ], [ -68.5352, -32.596383330000023 ], [ -68.532866670000018, -32.61813333 ], [ -68.530383330000021, -32.641216670000013 ], [ -68.52828333, -32.66071667 ], [ -68.52781667, -32.66513333 ], [ -68.52743333, -32.66948333 ], [ -68.527266669999989, -32.67406667 ], [ -68.5271, -32.678566670000023 ], [ -68.52691667000002, -32.683566670000012 ], [ -68.526333330000014, -32.69955 ], [ -68.52616667, -32.70435 ], [ -68.52566667, -32.713 ], [ -68.52513333, -32.71716667 ], [ -68.52446667, -32.72141667 ], [ -68.52368333, -32.725516669999983 ], [ -68.52291667, -32.72956667 ], [ -68.52226667, -32.73301667 ], [ -68.52236667, -32.73701667 ], [ -68.52198333, -32.741383329999977 ], [ -68.5215, -32.74561667 ], [ -68.52173333, -32.75068333 ], [ -68.522, -32.75483333 ], [ -68.52385, -32.76823333 ], [ -68.52711667, -32.79046667 ], [ -68.53061667, -32.81226667 ], [ -68.53391667, -32.83293333000001 ], [ -68.536762999608726, -32.850263568870801 ], [ -68.537099079397763, -32.854274061362638 ], [ -68.538227519639349, -32.876424879112392 ], [ -68.538733329999985, -32.88953333 ], [ -68.53901667, -32.89351667 ], [ -68.53953333, -32.90096667 ], [ -68.53966667, -32.90508333 ], [ -68.53983333, -32.90955 ], [ -68.539575791519013, -32.913962268270993 ], [ -68.535646990493376, -32.955079731853957 ], [ -68.534086725338327, -32.970806665132187 ], [ -68.539297542957613, -32.980144386035342 ], [ -68.54358363525229, -32.987793347147317 ], [ -68.555168951169321, -33.008590485826247 ], [ -68.559629882107146, -33.016086948428338 ], [ -68.56491515832748, -33.023847782238811 ], [ -68.575759311776238, -33.038361902530333 ], [ -68.582138860673481, -33.044321995679262 ], [ -68.59220421331419, -33.054280479778043 ], [ -68.59208333, -33.058 ], [ -68.5919, -33.062633329999983 ], [ -68.59176667, -33.06608333 ], [ -68.59161667, -33.06996667 ], [ -68.5915, -33.07343333 ], [ -68.59136667, -33.076566670000012 ], [ -68.59121667, -33.080716670000022 ], [ -68.59105, -33.085016670000023 ], [ -68.59121667, -33.0889 ], [ -68.591432570687033, -33.09275340426322 ], [ -68.59137755607675, -33.093564296721802 ], [ -68.584342477501224, -33.096638309811617 ], [ -68.583431901200541, -33.098508562364977 ], [ -68.583683331796934, -33.099033333510761 ] ] } },
									{ "type": "Feature", "properties": { "Name": "5LARE1", "description": "LINEA = 5RELA1<br>REGION = NORTE<br>ET_ORIGEN = La Rioja<br>ET_DESTINO = Recreotencia<br>TERNA = 1<br>KV = 500<br>ANO = 2008<br>LONGITUD = 147,4 km<br>", "tessellate": -1, "visibility": -1 }, "geometry": { "type": "LineString", "coordinates": [ [ -65.059363327331411, -29.26090194606979 ], [ -65.060215701401347, -29.2612979688835 ], [ -65.101260260114458, -29.280275441319869 ], [ -65.105415155982413, -29.282110169728352 ], [ -65.311351490189267, -29.366374245290949 ], [ -65.429527468040533, -29.449694863610489 ], [ -65.551422446204441, -29.458539481113402 ], [ -65.55579956622654, -29.45928321352114 ], [ -66.065039098731717, -29.464356535161009 ], [ -66.509053898256397, -29.39852341533657 ], [ -66.511082907062587, -29.397777520735179 ] ] } },
									{ "type": "Feature", "properties": { "Name": "5LURG1", "description": "LINEA = 5LURG1<br>REGION = NORTE<br>CAMMESA = -<br>ET_ORIGEN = Lujan<br>ET_DESTINO = Rio Grande<br>TERNA = 1<br>KV = 500<br>ANO = 1998<br>LONGITUD = 150,3<br>SECCION = 282,6<br>CONDUCTOR = DOVE<br>MATERIAL = Al\/Ac<br>NRO_X = 4<br>HILO = 67,35<br>MAT_HILO = Acero<br>RESIST = 100<br>POT_NAT = 975,80<br>IMPEDANCIA = 256,2<br>CTE_ATENUA = 5,13E-05<br>CTE_FASE = 1,08E-03<br>VEL_PROPAG = 291100<br>", "tessellate": -1, "visibility": -1 }, "geometry": { "type": "LineString", "coordinates": [ [ -64.636532097082892, -32.221177858102642 ], [ -64.637887283575807, -32.220164262648609 ], [ -64.63923131767892, -32.216798054763139 ], [ -64.66933, -32.1801 ], [ -64.6734, -32.17505 ], [ -64.67677, -32.17176 ], [ -64.67983, -32.16976 ], [ -64.6822, -32.16821 ], [ -64.71291, -32.14814 ], [ -64.74198, -32.12911 ], [ -64.77362, -32.10836 ], [ -64.78472, -32.10107 ], [ -64.80882, -32.09713 ], [ -64.83022, -32.09362 ], [ -64.83889, -32.08626 ], [ -64.85141, -32.07565 ], [ -64.85402, -32.07343 ], [ -64.86415, -32.06955 ], [ -64.89416, -32.05804 ], [ -64.89754, -32.05674 ], [ -64.91275, -32.05557 ], [ -64.93027, -32.05422 ], [ -64.93982, -32.05348 ], [ -64.94272, -32.05329 ], [ -64.95157, -32.05379 ], [ -64.96664, -32.05157 ], [ -64.9712, -32.05101 ], [ -64.98672, -32.04982 ], [ -65.02768, -32.04665 ], [ -65.0361, -32.04603 ], [ -65.06909, -32.04622 ], [ -65.11114, -32.04644 ], [ -65.15364, -32.04663 ], [ -65.19574, -32.04679 ], [ -65.2379, -32.04695 ], [ -65.25909, -32.04702 ], [ -65.2801, -32.0471 ], [ -65.30148, -32.04766 ], [ -65.3192, -32.04791 ], [ -65.32673, -32.04793 ], [ -65.33831, -32.05266 ], [ -65.37657, -32.06824 ], [ -65.38018, -32.0698 ], [ -65.3839, -32.07137 ], [ -65.38758, -32.07293 ], [ -65.39125, -32.07448 ], [ -65.39505, -32.07608 ], [ -65.39884, -32.07769 ], [ -65.40264, -32.07929 ], [ -65.40643, -32.08089 ], [ -65.41023, -32.0825 ], [ -65.41402, -32.0841 ], [ -65.41782, -32.0857 ], [ -65.42161, -32.0873 ], [ -65.42541, -32.0889 ], [ -65.42923, -32.09052 ], [ -65.43305, -32.09213 ], [ -65.43688, -32.09375 ], [ -65.44063, -32.09533 ], [ -65.44452, -32.09698 ], [ -65.44834, -32.0986 ], [ -65.45216, -32.10022 ], [ -65.45598, -32.10184 ], [ -65.45981, -32.10346 ], [ -65.46363, -32.10508 ], [ -65.46745, -32.1067 ], [ -65.47127, -32.10832 ], [ -65.47509, -32.10994 ], [ -65.47891, -32.11156 ], [ -65.48274, -32.11318 ], [ -65.48656, -32.1148 ], [ -65.49038, -32.11642 ], [ -65.4942, -32.11803 ], [ -65.49802, -32.11965 ], [ -65.50185, -32.12127 ], [ -65.50567, -32.12289 ], [ -65.50949, -32.12451 ], [ -65.51332, -32.12613 ], [ -65.51714, -32.12774 ], [ -65.52096, -32.12936 ], [ -65.52479, -32.13098 ], [ -65.52861, -32.1326 ], [ -65.53243, -32.13422 ], [ -65.53626, -32.13583 ], [ -65.54008, -32.13745 ], [ -65.54386, -32.13905 ], [ -65.54762, -32.14073 ], [ -65.55135, -32.14238 ], [ -65.55507, -32.14404 ], [ -65.55879, -32.1457 ], [ -65.56251, -32.14735 ], [ -65.56622, -32.14901 ], [ -65.56994, -32.15066 ], [ -65.57366, -32.15231 ], [ -65.57738, -32.15397 ], [ -65.58107, -32.15561 ], [ -65.58482, -32.15727 ], [ -65.58854, -32.15893 ], [ -65.59226, -32.16058 ], [ -65.59598, -32.16223 ], [ -65.59971, -32.16388 ], [ -65.60343, -32.16553 ], [ -65.60715, -32.16718 ], [ -65.61087, -32.16883 ], [ -65.61459, -32.17048 ], [ -65.61832, -32.17213 ], [ -65.62208, -32.1738 ], [ -65.62586, -32.17548 ], [ -65.62963, -32.17715 ], [ -65.63333, -32.17879 ], [ -65.63722, -32.1804 ], [ -65.64099, -32.18197 ], [ -65.64477, -32.18353 ], [ -65.64855, -32.1851 ], [ -65.65233, -32.18667 ], [ -65.65612, -32.18823 ], [ -65.65988, -32.18979 ], [ -65.66361, -32.19134 ], [ -65.66741, -32.19292 ], [ -65.67117, -32.19448 ], [ -65.67494, -32.19604 ], [ -65.6787, -32.1976 ], [ -65.68247, -32.19917 ], [ -65.68627, -32.20074 ], [ -65.69014, -32.20235 ], [ -65.69384, -32.20388 ], [ -65.69767, -32.20547 ], [ -65.70141, -32.20712 ], [ -65.70521, -32.2088 ], [ -65.709, -32.21047 ], [ -65.7128, -32.21214 ], [ -65.71659, -32.21382 ], [ -65.72029, -32.21545 ], [ -65.72408, -32.21712 ], [ -65.72788, -32.21879 ], [ -65.73167, -32.22047 ], [ -65.73543, -32.22212 ], [ -65.73918, -32.22377 ], [ -65.74292, -32.22543 ], [ -65.74662, -32.22706 ], [ -65.75033, -32.22869 ], [ -65.75403, -32.23032 ], [ -65.75772, -32.23194 ], [ -65.76149, -32.2336 ], [ -65.76488, -32.2351 ], [ -65.76881, -32.23683 ], [ -65.77251, -32.23846 ], [ -65.77621, -32.24009 ], [ -65.77994, -32.24173 ], [ -65.7837, -32.24338 ], [ -65.78746, -32.24504 ], [ -65.79132, -32.24674 ], [ -65.79498, -32.24835 ], [ -65.79821, -32.24977 ], [ -65.80151, -32.25122 ], [ -65.80482, -32.25268 ], [ -65.80817, -32.25415 ], [ -65.81203, -32.25585 ], [ -65.81627, -32.25771 ], [ -65.82013, -32.25941 ], [ -65.82413, -32.26117 ], [ -65.82806, -32.2629 ], [ -65.83195, -32.26461 ], [ -65.83581, -32.26631 ], [ -65.83973, -32.26803 ], [ -65.84364, -32.26975 ], [ -65.84755, -32.27146 ], [ -65.85142, -32.27316 ], [ -65.85528, -32.27486 ], [ -65.85911, -32.27654 ], [ -65.8629, -32.27821 ], [ -65.86667, -32.27986 ], [ -65.87044, -32.28152 ], [ -65.87417, -32.28315 ], [ -65.87794, -32.28481 ], [ -65.88168, -32.28645 ], [ -65.88545, -32.28811 ], [ -65.88919, -32.28975 ], [ -65.89295, -32.2914 ], [ -65.89663, -32.29301 ], [ -65.9004, -32.29467 ], [ -65.90424, -32.29635 ], [ -65.90799, -32.298 ], [ -65.91171, -32.29963 ], [ -65.91545, -32.30127 ], [ -65.91921, -32.30291 ], [ -65.92289, -32.30453 ], [ -65.92658, -32.30615 ], [ -65.93033, -32.30779 ], [ -65.93408, -32.30944 ], [ -65.93777, -32.31105 ], [ -65.94155, -32.31271 ], [ -65.94522, -32.31432 ], [ -65.94888, -32.31592 ], [ -65.95278, -32.31765 ], [ -65.95661, -32.31933 ], [ -65.96032, -32.32096 ], [ -65.96398, -32.32256 ], [ -65.96793, -32.32429 ], [ -65.97155, -32.32588 ], [ -65.97618, -32.3279 ], [ -65.97943, -32.32933 ], [ -65.98297, -32.33088 ], [ -65.9867, -32.33251 ], [ -65.99043, -32.33414 ], [ -65.9942, -32.33579 ], [ -65.99798, -32.33745 ], [ -66.00176, -32.3391 ], [ -66.00553, -32.34075 ], [ -66.00932, -32.34241 ], [ -66.01308, -32.34406 ], [ -66.01686, -32.34571 ], [ -66.02063, -32.34737 ], [ -66.02445, -32.34904 ], [ -66.02828, -32.35072 ], [ -66.03205, -32.35238 ], [ -66.03583, -32.35403 ], [ -66.03974, -32.35575 ], [ -66.04357, -32.35742 ], [ -66.04734, -32.35907 ], [ -66.05112, -32.36073 ], [ -66.05489, -32.36238 ], [ -66.0587, -32.36405 ], [ -66.06247, -32.3657 ], [ -66.066057045612226, -32.367297143067411 ], [ -66.06589088390318, -32.367553427296791 ] ] } },
									{ "type": "Feature", "properties": { "Name": "5MARE1", "description": "LINEA = 5MARE1<br>REGION = NORTE<br>CAMMESA = 356<br>ET_ORIGEN = Malvinas Arg.<br>ET_DESTINO = Recreo<br>TERNA = 1<br>KV = 500<br>ANO = 1987<br>LONGITUD = 259,5<br>SECCION = 282,6<br>CONDUCTOR = DOVE<br>MATERIAL = Al\/Ac<br>NRO_X = 4<br>HILO = 67,35<br>MAT_HILO = Acero<br>RESIST = 100<br>POT_NAT = 978,86<br>IMPEDANCIA = 255,4<br>CTE_ATENUA = 5,15E-05<br>CTE_FASE = 1,08E-03<br>VEL_PROPAG = 292200<br>", "tessellate": -1, "visibility": -1 }, "geometry": { "type": "LineString", "coordinates": [ [ -63.91316, -31.33883 ], [ -63.91319, -31.33683 ], [ -63.91311, -31.32103 ], [ -63.91308, -31.31778 ], [ -63.91573, -31.30475 ], [ -63.92247, -31.26976 ], [ -63.92877, -31.23416 ], [ -63.93506, -31.19875 ], [ -63.94134, -31.16341 ], [ -63.94763, -31.12797 ], [ -63.95092, -31.10997 ], [ -63.95742, -31.07396 ], [ -63.96058, -31.05647 ], [ -63.96761, -31.03929 ], [ -63.9745, -31.02245 ], [ -63.98803, -30.98936 ], [ -64.00166, -30.95569 ], [ -64.00869, -30.93886 ], [ -64.02065, -30.90383 ], [ -64.0324, -30.86936 ], [ -64.04336, -30.83565 ], [ -64.05288, -30.80483 ], [ -64.07626, -30.77254 ], [ -64.09746, -30.74325 ], [ -64.11752, -30.71219 ], [ -64.12803, -30.69592 ], [ -64.14802, -30.66495 ], [ -64.16839, -30.63336 ], [ -64.18756, -30.60168 ], [ -64.20534, -30.5693 ], [ -64.22313, -30.53687 ], [ -64.22653, -30.53068 ], [ -64.22816, -30.5277 ], [ -64.23325, -30.52229 ], [ -64.2579, -30.49605 ], [ -64.28382, -30.46878 ], [ -64.32183, -30.42961 ], [ -64.33538, -30.413 ], [ -64.35736, -30.38603 ], [ -64.38018, -30.35801 ], [ -64.41327, -30.31736 ], [ -64.43648, -30.28389 ], [ -64.46699, -30.23986 ], [ -64.48764, -30.2095 ], [ -64.50332, -30.17637 ], [ -64.53486, -30.10967 ], [ -64.56613, -30.04354 ], [ -64.56782, -30.04005 ], [ -64.58193, -30.01086 ], [ -64.59801, -29.97757 ], [ -64.61398, -29.9445 ], [ -64.646, -29.87811 ], [ -64.66194, -29.84503 ], [ -64.66987, -29.82857 ], [ -64.67145, -29.82528 ], [ -64.69182, -29.79768 ], [ -64.71399, -29.76808 ], [ -64.73674, -29.73798 ], [ -64.7572, -29.71089 ], [ -64.75951, -29.70784 ], [ -64.78232, -29.67762 ], [ -64.80483, -29.64777 ], [ -64.82734, -29.61793 ], [ -64.84242, -29.5979 ], [ -64.84537, -29.59475 ], [ -64.84931, -29.58851 ], [ -64.8513, -29.58535 ], [ -64.86923, -29.55692 ], [ -64.88908, -29.52543 ], [ -64.90903, -29.49375 ], [ -64.9288, -29.46239 ], [ -64.94862, -29.43091 ], [ -64.96832, -29.39962 ], [ -64.98833, -29.36775 ], [ -64.99033, -29.36457 ], [ -65.00807, -29.33633 ], [ -65.02771, -29.30506 ], [ -65.03768, -29.2892 ], [ -65.04044, -29.27925 ], [ -65.0435, -29.27211 ], [ -65.04481, -29.26908 ], [ -65.0479, -29.26187 ], [ -65.05073, -29.26074 ], [ -65.05421, -29.25935 ], [ -65.05634, -29.25979 ] ] } },
									{ "type": "Feature", "properties": { "Name": "5RARO1", "description": "LINEA = 5RARO1<br>REGION = NORTE<br>CAMMESA = -<br>ET_ORIGEN = Ramallo<br>ET_DESTINO = Rosario<br>TERNA = 1<br>KV = 500<br>ANO = 1981<br>LONGITUD = 77,4<br>SECCION = 322,0<br>CONDUCTOR = KINGBIRD<br>MATERIAL = Al\/Ac<br>NRO_X = 4<br>HILO = 67,35<br>MAT_HILO = Acero<br>RESIST = 100<br>POT_NAT = 990,49<br>IMPEDANCIA = 252,4<br>CTE_ATENUA = 4,54E-05<br>CTE_FASE = 1,07E-03<br>VEL_PROPAG = 292400<br>", "tessellate": -1, "visibility": -1 }, "geometry": { "type": "LineString", "coordinates": [ [ -60.780736183894753, -32.969784551678373 ], [ -60.78067, -32.97068 ], [ -60.75318, -32.98982 ], [ -60.74548, -32.99677 ], [ -60.73715, -33.02462 ], [ -60.73381, -33.02749 ], [ -60.71713, -33.04186 ], [ -60.68358, -33.07074 ], [ -60.65354, -33.09661 ], [ -60.64996, -33.09911 ], [ -60.63119, -33.11226 ], [ -60.59359, -33.1387 ], [ -60.56373, -33.15975 ], [ -60.55681, -33.16487 ], [ -60.51984, -33.19216 ], [ -60.50153, -33.20568 ], [ -60.465618433511608, -33.232541298934052 ], [ -60.4474, -33.24651 ], [ -60.43067, -33.25934 ], [ -60.4143, -33.27194 ], [ -60.38968, -33.29005 ], [ -60.3868, -33.29288 ], [ -60.38339, -33.29543 ], [ -60.34777, -33.32208 ], [ -60.32997, -33.3354 ], [ -60.32653, -33.33798 ], [ -60.29323, -33.35871 ], [ -60.28952, -33.36102 ], [ -60.27625, -33.37066 ], [ -60.2663, -33.37788 ], [ -60.25915, -33.38322 ], [ -60.24155, -33.39636 ], [ -60.22422, -33.40896 ], [ -60.20007, -33.42642 ], [ -60.19998, -33.42602 ], [ -60.1986, -33.42363 ], [ -60.18985, -33.42197 ], [ -60.18132, -33.41242 ], [ -60.181453440071337, -33.411295301314198 ] ] } },
									{ "type": "Feature", "properties": { "Name": "5RMRS1", "description": "LINEA = 5RMRS1<br>REGION = NORTE<br>CAMMESA = 238<br>ET_ORIGEN = Romang<br>ET_DESTINO = Resistencia<br>TERNA = 1<br>KV = 500<br>ANO = 1985<br>LONGITUD = 256,8<br>SECCION = 282,6<br>CONDUCTOR = DOVE<br>MATERIAL = Al\/Ac<br>NRO_X = 4<br>HILO = 73,91<br>MAT_HILO = Acero<br>RESIST = 100<br>POT_NAT = 1006,85<br>IMPEDANCIA = 248,3<br>CTE_ATENUA = 5,27E-05<br>CTE_FASE = 1,07E-03<br>VEL_PROPAG = 292600<br>", "tessellate": -1, "visibility": -1 }, "geometry": { "type": "LineString", "coordinates": [ [ -59.76267, -29.45859 ], [ -59.76239, -29.45789 ], [ -59.75466, -29.43984 ], [ -59.75447, -29.42258 ], [ -59.754, -29.37987 ], [ -59.75379, -29.3584 ], [ -59.75329, -29.31628 ], [ -59.7528, -29.27897 ], [ -59.75223, -29.27541 ], [ -59.74912, -29.2558 ], [ -59.74247, -29.21388 ], [ -59.73915, -29.19288 ], [ -59.73257, -29.15126 ], [ -59.73083, -29.14029 ], [ -59.72475, -29.13435 ], [ -59.69325, -29.10358 ], [ -59.66124, -29.07232 ], [ -59.64515, -29.0566 ], [ -59.61353, -29.02571 ], [ -59.60729, -29.01961 ], [ -59.60059, -29.01002 ], [ -59.5913, -28.99672 ], [ -59.58992, -28.99268 ], [ -59.58293, -28.97212 ], [ -59.56915, -28.93157 ], [ -59.55545, -28.8912 ], [ -59.55401, -28.88696 ], [ -59.53463, -28.85277 ], [ -59.51314, -28.81482 ], [ -59.49152, -28.77659 ], [ -59.4701, -28.73866 ], [ -59.4666, -28.71776 ], [ -59.4594, -28.67564 ], [ -59.4523, -28.63361 ], [ -59.44812, -28.60891 ], [ -59.43795, -28.5949 ], [ -59.4304, -28.5845 ], [ -59.42581, -28.57734 ], [ -59.40254, -28.541 ], [ -59.38146, -28.5052 ], [ -59.35986, -28.46848 ], [ -59.35543, -28.46095 ], [ -59.34917, -28.44936 ], [ -59.32828, -28.41069 ], [ -59.3099, -28.37665 ], [ -59.30793, -28.373 ], [ -59.306, -28.36943 ], [ -59.30399, -28.36571 ], [ -59.30197, -28.36196 ], [ -59.29996, -28.35823 ], [ -59.29793, -28.35447 ], [ -59.29595, -28.3508 ], [ -59.29396, -28.34711 ], [ -59.29205, -28.34357 ], [ -59.2901, -28.33996 ], [ -59.29031, -28.33592 ], [ -59.29052, -28.33179 ], [ -59.29074, -28.32764 ], [ -59.29095, -28.32358 ], [ -59.29116, -28.31965 ], [ -59.29136, -28.3157 ], [ -59.29157, -28.31159 ], [ -59.29179, -28.30742 ], [ -59.29201, -28.30318 ], [ -59.29223, -28.29888 ], [ -59.29246, -28.29462 ], [ -59.29268, -28.29031 ], [ -59.2929, -28.28604 ], [ -59.29312, -28.28175 ], [ -59.29335, -28.27745 ], [ -59.29357, -28.27319 ], [ -59.29379, -28.26889 ], [ -59.29402, -28.26457 ], [ -59.29424, -28.26028 ], [ -59.29446, -28.25603 ], [ -59.29468, -28.25174 ], [ -59.2949, -28.24751 ], [ -59.29516, -28.24322 ], [ -59.29541, -28.23897 ], [ -59.29567, -28.23467 ], [ -59.29592, -28.2304 ], [ -59.29617, -28.22612 ], [ -59.29643, -28.2219 ], [ -59.29668, -28.21759 ], [ -59.29693, -28.21333 ], [ -59.29718, -28.20909 ], [ -59.29744, -28.20484 ], [ -59.29769, -28.2006 ], [ -59.29794, -28.19634 ], [ -59.29818, -28.19224 ], [ -59.29842, -28.18826 ], [ -59.29865, -28.1843 ], [ -59.29889, -28.18035 ], [ -59.29912, -28.17644 ], [ -59.29935, -28.17251 ], [ -59.29958, -28.16868 ], [ -59.29981, -28.16483 ], [ -59.30004, -28.16089 ], [ -59.30027, -28.15709 ], [ -59.3005, -28.15317 ], [ -59.30074, -28.1491 ], [ -59.30078, -28.14502 ], [ -59.30083, -28.14076 ], [ -59.30087, -28.13651 ], [ -59.30092, -28.13227 ], [ -59.30096, -28.12798 ], [ -59.30101, -28.12375 ], [ -59.30105, -28.11948 ], [ -59.3011, -28.11516 ], [ -59.30114, -28.11089 ], [ -59.30119, -28.10658 ], [ -59.30123, -28.10234 ], [ -59.30128, -28.09806 ], [ -59.30133, -28.09377 ], [ -59.30137, -28.08948 ], [ -59.30142, -28.0852 ], [ -59.30146, -28.08091 ], [ -59.30151, -28.07664 ], [ -59.30155, -28.07238 ], [ -59.3016, -28.06814 ], [ -59.30164, -28.06386 ], [ -59.30169, -28.05956 ], [ -59.30173, -28.05529 ], [ -59.30178, -28.05104 ], [ -59.30182, -28.04675 ], [ -59.30187, -28.04256 ], [ -59.30191, -28.03833 ], [ -59.30181, -28.03408 ], [ -59.30171, -28.02982 ], [ -59.30161, -28.02555 ], [ -59.30151, -28.02128 ], [ -59.30141, -28.01701 ], [ -59.30131, -28.01275 ], [ -59.30121, -28.00848 ], [ -59.30111, -28.00418 ], [ -59.30101, -28.00005 ], [ -59.3009, -27.9956 ], [ -59.3008, -27.99143 ], [ -59.3007, -27.98716 ], [ -59.3006, -27.9829 ], [ -59.3005, -27.97863 ], [ -59.3004, -27.97432 ], [ -59.3003, -27.96997 ], [ -59.30021, -27.96599 ], [ -59.3001, -27.96165 ], [ -59.3, -27.95736 ], [ -59.2999, -27.95309 ], [ -59.2998, -27.94876 ], [ -59.2997, -27.94452 ], [ -59.29966, -27.94042 ], [ -59.29962, -27.93614 ], [ -59.29958, -27.9318 ], [ -59.29953, -27.92747 ], [ -59.29949, -27.92314 ], [ -59.29945, -27.91895 ], [ -59.29938, -27.91478 ], [ -59.29926, -27.91059 ], [ -59.29919, -27.90636 ], [ -59.29911, -27.90203 ], [ -59.29904, -27.8977 ], [ -59.29896, -27.8935 ], [ -59.29889, -27.88933 ], [ -59.29881, -27.8851 ], [ -59.29873, -27.88116 ], [ -59.29868, -27.87706 ], [ -59.29862, -27.87283 ], [ -59.29857, -27.8685 ], [ -59.29852, -27.86417 ], [ -59.29846, -27.85997 ], [ -59.29841, -27.8556 ], [ -59.29835, -27.85147 ], [ -59.2983, -27.84708 ], [ -59.29825, -27.8429 ], [ -59.2982, -27.83895 ], [ -59.29814, -27.83462 ], [ -59.29809, -27.83051 ], [ -59.29804, -27.82636 ], [ -59.29798, -27.82197 ], [ -59.29793, -27.81774 ], [ -59.29787, -27.81347 ], [ -59.29782, -27.8092 ], [ -59.29558, -27.8054 ], [ -59.29334, -27.80158 ], [ -59.29111, -27.79781 ], [ -59.28888, -27.79401 ], [ -59.2867, -27.79031 ], [ -59.28444, -27.78647 ], [ -59.28229, -27.78281 ], [ -59.28004, -27.77899 ], [ -59.27779, -27.77517 ], [ -59.27554, -27.77134 ], [ -59.27328, -27.76751 ], [ -59.27103, -27.76368 ], [ -59.26878, -27.75985 ], [ -59.26652, -27.75602 ], [ -59.26427, -27.75219 ], [ -59.26202, -27.74836 ], [ -59.25977, -27.74454 ], [ -59.25752, -27.74071 ], [ -59.25527, -27.73688 ], [ -59.25301, -27.73305 ], [ -59.25076, -27.72922 ], [ -59.24849, -27.72538 ], [ -59.24626, -27.72159 ], [ -59.244, -27.71774 ], [ -59.24174, -27.71392 ], [ -59.23948, -27.71008 ], [ -59.23724, -27.70628 ], [ -59.23499, -27.70245 ], [ -59.23273, -27.69862 ], [ -59.23048, -27.69479 ], [ -59.22823, -27.69096 ], [ -59.22597, -27.68713 ], [ -59.22372, -27.6833 ], [ -59.22148, -27.6795 ], [ -59.21922, -27.6757 ], [ -59.21693, -27.67188 ], [ -59.21465, -27.66805 ], [ -59.21235, -27.66421 ], [ -59.21008, -27.6604 ], [ -59.2078, -27.65658 ], [ -59.20552, -27.65278 ], [ -59.20324, -27.64896 ], [ -59.20096, -27.64514 ], [ -59.19868, -27.64133 ], [ -59.19641, -27.63751 ], [ -59.19413, -27.63369 ], [ -59.19185, -27.62988 ], [ -59.18958, -27.62608 ], [ -59.1873, -27.62226 ], [ -59.18501, -27.61843 ], [ -59.18275, -27.61464 ], [ -59.18045, -27.6108 ], [ -59.17817, -27.60698 ], [ -59.17589, -27.60317 ], [ -59.1736, -27.59936 ], [ -59.17132, -27.59554 ], [ -59.16904, -27.59173 ], [ -59.16676, -27.58791 ], [ -59.16448, -27.5841 ], [ -59.16219, -27.58028 ], [ -59.15991, -27.57647 ], [ -59.15765, -27.57269 ], [ -59.15539, -27.5689 ], [ -59.15313, -27.56512 ], [ -59.15086, -27.56134 ], [ -59.14861, -27.55756 ], [ -59.14634, -27.55377 ], [ -59.14411, -27.55004 ], [ -59.14402, -27.54569 ], [ -59.14393, -27.5415 ], [ -59.14384, -27.53725 ], [ -59.14375, -27.53307 ], [ -59.14366, -27.52874 ], [ -59.14357, -27.52451 ], [ -59.14348, -27.52026 ], [ -59.14339, -27.51588 ], [ -59.1433, -27.51162 ], [ -59.14322, -27.50753 ], [ -59.14313, -27.50326 ], [ -59.14304, -27.499 ], [ -59.14295, -27.49472 ], [ -59.14286, -27.49039 ], [ -59.14277, -27.48628 ], [ -59.14269, -27.48202 ], [ -59.1426, -27.47778 ], [ -59.14252, -27.4735 ], [ -59.14243, -27.46926 ], [ -59.14235, -27.46501 ], [ -59.14226, -27.46076 ], [ -59.14218, -27.45652 ], [ -59.14209, -27.45231 ], [ -59.14201, -27.44801 ], [ -59.14192, -27.44379 ], [ -59.14184, -27.43948 ], [ -59.14175, -27.43522 ], [ -59.14167, -27.43097 ], [ -59.14158, -27.4267 ], [ -59.1415, -27.42249 ], [ -59.14142, -27.41835 ], [ -59.14134, -27.41421 ], [ -59.14125, -27.41005 ], [ -59.14117, -27.40577 ], [ -59.14108, -27.40152 ], [ -59.141, -27.39727 ], [ -59.14091, -27.39296 ], [ -59.14083, -27.38869 ], [ -59.14074, -27.38445 ], [ -59.14066, -27.38025 ], [ -59.14058, -27.37596 ], [ -59.14049, -27.37167 ], [ -59.14041, -27.36752 ], [ -59.14032, -27.36315 ], [ -59.14024, -27.35886 ], [ -59.14015, -27.35461 ], [ -59.14007, -27.35032 ], [ -59.13998, -27.34603 ], [ -59.13789, -27.34207 ], [ -59.13583, -27.3382 ], [ -59.13378, -27.33432 ], [ -59.13172, -27.33042 ], [ -59.12966, -27.32652 ], [ -59.12763, -27.32269 ], [ -59.12552, -27.31872 ], [ -59.12348, -27.31486 ], [ -59.12169, -27.31147 ], [ -59.12006, -27.3084 ], [ -59.11841, -27.30528 ], [ -59.11669, -27.30202 ], [ -59.11311, -27.29908 ], [ -59.11042, -27.29854 ], [ -59.10977, -27.29877 ] ] } },
									{ "type": "Feature", "properties": { "Name": "5RMST1", "description": "LINEA = 5RMST1<br>REGION = NORTE<br>CAMMESA = 236<br>ET_ORIGEN = Santo Tome<br>ET_DESTINO = Romang<br>TERNA = 1<br>KV = 500<br>ANO = 1985<br>LONGITUD = 271,8<br>SECCION = 282,6<br>CONDUCTOR = DOVE<br>MATERIAL = Al\/Ac<br>NRO_X = 4<br>HILO = 73,91<br>MAT_HILO = Acero<br>RESIST = 100<br>POT_NAT = 992,46<br>IMPEDANCIA = 251,9<br>CTE_ATENUA = 5,23E-05<br>CTE_FASE = 1,07E-03<br>VEL_PROPAG = 292700<br>", "tessellate": -1, "visibility": -1 }, "geometry": { "type": "LineString", "coordinates": [ [ -60.862829495349189, -31.657553315199259 ], [ -60.86299, -31.65531 ], [ -60.85769, -31.63955 ], [ -60.84465, -31.60202 ], [ -60.83716, -31.58422 ], [ -60.82959, -31.56621 ], [ -60.81373, -31.52845 ], [ -60.80564, -31.50937 ], [ -60.78975, -31.47189 ], [ -60.77486, -31.43557 ], [ -60.76714, -31.41589 ], [ -60.75935, -31.39603 ], [ -60.74384, -31.35642 ], [ -60.7285, -31.31725 ], [ -60.71384, -31.27983 ], [ -60.69899, -31.24162 ], [ -60.6837, -31.20216 ], [ -60.66839, -31.16258 ], [ -60.65313, -31.12311 ], [ -60.63795, -31.08379 ], [ -60.6228, -31.04447 ], [ -60.61524, -31.02486 ], [ -60.60774, -31.0054 ], [ -60.59266, -30.96621 ], [ -60.57757, -30.92698 ], [ -60.56335, -30.88917 ], [ -60.5493, -30.8504 ], [ -60.53507, -30.81103 ], [ -60.52076, -30.7713 ], [ -60.50648, -30.73163 ], [ -60.49935, -30.7118 ], [ -60.4925, -30.69272 ], [ -60.48577, -30.674 ], [ -60.47474, -30.64326 ], [ -60.46626, -30.61594 ], [ -60.45405, -30.57657 ], [ -60.44166, -30.53679 ], [ -60.42927, -30.49701 ], [ -60.41694, -30.45722 ], [ -60.40449, -30.41701 ], [ -60.39203, -30.37679 ], [ -60.37991, -30.33766 ], [ -60.3676, -30.29786 ], [ -60.35585, -30.25896 ], [ -60.34412, -30.21872 ], [ -60.33241, -30.17851 ], [ -60.32083, -30.13852 ], [ -60.30925, -30.09855 ], [ -60.29764, -30.05852 ], [ -60.28637, -30.01963 ], [ -60.28418, -30.01209 ], [ -60.26794, -29.98255 ], [ -60.24743, -29.94519 ], [ -60.22682, -29.90824 ], [ -60.20615, -29.87105 ], [ -60.18557, -29.83386 ], [ -60.16912, -29.80411 ], [ -60.16244, -29.79859 ], [ -60.1277, -29.76988 ], [ -60.11106, -29.75612 ], [ -60.0431, -29.6999 ], [ -60.0083, -29.67105 ], [ -59.9742, -29.64223 ], [ -59.94044, -29.61316 ], [ -59.90651, -29.58392 ], [ -59.87254, -29.55459 ], [ -59.83856, -29.52524 ], [ -59.80444, -29.49574 ], [ -59.77038076711402, -29.466867497255741 ], [ -59.764181365067742, -29.461583096175119 ], [ -59.763831603866741, -29.460328759495379 ] ] } },
									{ "type": "Feature", "properties": { "Name": "5SGST1", "description": "LINEA = 5SGST1<br>REGION = NORTE<br>CAMMESA = 237<br>ET_ORIGEN = Salto Grande<br>ET_DESTINO = Santo Tome<br>TERNA = 1<br>KV = 500<br>ANO = 1981<br>LONGITUD = 288,8<br>SECCION = 282,6<br>CONDUCTOR = DOVE<br>MATERIAL = Al\/Ac<br>NRO_X = 4<br>HILO = 72,23<br>MAT_HILO = Acero<br>RESIST = 100<br>POT_NAT = 1010,92<br>IMPEDANCIA = 247,3<br>CTE_ATENUA = 5,30E-05<br>CTE_FASE = 1,08E-03<br>VEL_PROPAG = 292100<br>", "tessellate": -1, "visibility": -1 }, "geometry": { "type": "LineString", "coordinates": [ [ -57.96477, -31.28 ], [ -57.9663, -31.28052 ], [ -57.97731, -31.29353 ], [ -57.99041, -31.30899 ], [ -58.00901, -31.33339 ], [ -58.01619, -31.33414 ], [ -58.03602, -31.33621 ], [ -58.07793, -31.34069 ], [ -58.09696, -31.34276 ], [ -58.1144, -31.35211 ], [ -58.13271, -31.36193 ], [ -58.16039, -31.37943 ], [ -58.16388, -31.38164 ], [ -58.16671, -31.38343 ], [ -58.18309, -31.38755 ], [ -58.2028, -31.39251 ], [ -58.21086, -31.39454 ], [ -58.22185, -31.39908 ], [ -58.23687, -31.40527 ], [ -58.24095, -31.40695 ], [ -58.24518, -31.40869 ], [ -58.24883, -31.4102 ], [ -58.28307, -31.41042 ], [ -58.32401, -31.4107 ], [ -58.36378, -31.41096 ], [ -58.40434, -31.41121 ], [ -58.44417, -31.41144 ], [ -58.48509, -31.41173 ], [ -58.52468, -31.4119 ], [ -58.52898, -31.41191 ], [ -58.56322, -31.41659 ], [ -58.60048, -31.42219 ], [ -58.63899, -31.42837 ], [ -58.67787, -31.43461 ], [ -58.71595, -31.44073 ], [ -58.7362, -31.44398 ], [ -58.75559, -31.44751 ], [ -58.77448, -31.45105 ], [ -58.81403, -31.45846 ], [ -58.85307, -31.46576 ], [ -58.8919, -31.47294 ], [ -58.91187, -31.47663 ], [ -58.93151, -31.48042 ], [ -58.97145, -31.48865 ], [ -58.99127, -31.49273 ], [ -59.03018, -31.50073 ], [ -59.05041, -31.50488 ], [ -59.05867, -31.50658 ], [ -59.08941, -31.51176 ], [ -59.12878, -31.51839 ], [ -59.15835, -31.52336 ], [ -59.19098, -31.52669 ], [ -59.22543, -31.5302 ], [ -59.25124, -31.53491 ], [ -59.29045, -31.54205 ], [ -59.3505, -31.55297 ], [ -59.36958, -31.55643 ], [ -59.38862, -31.55988 ], [ -59.42769, -31.56714 ], [ -59.46809, -31.57482 ], [ -59.50742, -31.58229 ], [ -59.54629, -31.58966 ], [ -59.56364, -31.5957 ], [ -59.59947, -31.6082 ], [ -59.60832, -31.61129 ], [ -59.65461, -31.61515 ], [ -59.65839, -31.61547 ], [ -59.69951, -31.61878 ], [ -59.74015, -31.62178 ], [ -59.77849, -31.62462 ], [ -59.81749, -31.62752 ], [ -59.85721, -31.63046 ], [ -59.88579, -31.63257 ], [ -59.9169, -31.63765 ], [ -59.95568, -31.64398 ], [ -59.99418, -31.65024 ], [ -60.03414, -31.65582 ], [ -60.07298, -31.66143 ], [ -60.11133, -31.66696 ], [ -60.14974, -31.67263 ], [ -60.18838, -31.67875 ], [ -60.22901, -31.68516 ], [ -60.24561, -31.68878 ], [ -60.28337, -31.69702 ], [ -60.32208, -31.7055 ], [ -60.35389, -31.71236 ], [ -60.38238, -31.71108 ], [ -60.41913, -31.70942 ], [ -60.44269, -31.70835 ], [ -60.48115, -31.70795 ], [ -60.48508, -31.70791 ], [ -60.4904, -31.68697 ], [ -60.50618, -31.68252 ], [ -60.50978, -31.68151 ], [ -60.55012, -31.67006 ], [ -60.590517104767372, -31.658522323762039 ], [ -60.59879294582008, -31.657657065635899 ], [ -60.61085, -31.65647 ], [ -60.65119, -31.65845 ], [ -60.684, -31.66005 ], [ -60.71136, -31.67733 ], [ -60.74148, -31.67828 ], [ -60.75361, -31.66 ], [ -60.75776, -31.65375 ], [ -60.77661, -31.64729 ], [ -60.80656, -31.64747 ], [ -60.84227, -31.64768 ], [ -60.84591, -31.64869 ], [ -60.86024, -31.65267 ], [ -60.86133, -31.6556 ], [ -60.862009830336781, -31.65766725599477 ] ] } },
									{ "type": "Feature", "properties": { "Name": "ALTO PENCOSO", "description": null, "tessellate": -1, "visibility": 0 }, "geometry": { "type": "Point", "coordinates": [ -66.927385135937072, -33.428647399819539 ] } },
									{ "type": "Feature", "properties": { "Name": "BALDE", "description": null, "tessellate": -1, "visibility": 0 }, "geometry": { "type": "Point", "coordinates": [ -66.682468797046113, -33.385681881934197 ] } },
									{ "type": "Feature", "properties": { "Name": "CHUCUL", "description": null, "tessellate": -1, "visibility": 0 }, "geometry": { "type": "Point", "coordinates": [ -64.19244435705302, -33.025278804422037 ] } },
									{ "type": "Feature", "properties": { "Name": "CORONEL MOLDES", "description": null, "tessellate": -1, "visibility": 0 }, "geometry": { "type": "Point", "coordinates": [ -64.619494820489138, -33.659419863946432 ] } },
									{ "type": "Feature", "properties": { "Name": "GENERAL DEHEZA", "description": null, "tessellate": -1, "visibility": 0 }, "geometry": { "type": "Point", "coordinates": [ -63.736668300641448, -32.762739642570182 ] } },
									{ "type": "Feature", "properties": { "Name": "JUSTO DARACT", "description": null, "tessellate": -1, "visibility": 0 }, "geometry": { "type": "Point", "coordinates": [ -65.160657856948305, -33.820569196051963 ] } },
									{ "type": "Feature", "properties": { "Name": "LA CUMBRE", "description": null, "tessellate": -1, "visibility": 0 }, "geometry": { "type": "Point", "coordinates": [ -66.116729774469263, -33.345520955198552 ] } },
									{ "type": "Feature", "properties": { "Name": "LA DORMIDA", "description": null, "tessellate": -1, "visibility": 0 }, "geometry": { "type": "Point", "coordinates": [ -67.82830336996328, -33.393103524390483 ] } },
									{ "type": "Feature", "properties": { "Name": "LA PAZ", "description": null, "tessellate": -1, "visibility": 0 }, "geometry": { "type": "Point", "coordinates": [ -67.514599576324201, -33.459526206611542 ] } },
									{ "type": "Feature", "properties": { "Name": "LIBORIO LUNA", "description": null, "tessellate": -1, "visibility": 0 }, "geometry": { "type": "Point", "coordinates": [ -65.637112738724966, -33.589141451839353 ] } },
									{ "type": "Feature", "properties": { "Name": "SANTA CATALINA", "description": null, "tessellate": -1, "visibility": 0 }, "geometry": { "type": "Point", "coordinates": [ -64.420471762636623, -33.321188020635468 ] } },
									{ "type": "Feature", "properties": { "Name": "SANTA ROSA", "description": null, "tessellate": -1, "visibility": 0 }, "geometry": { "type": "Point", "coordinates": [ -68.210325160704883, -33.22746008608862 ] } }
								]
							}
						},
						"paint": {
							"line-color": "#0000ff",
							"line-width": 3
						}
					}
				);

				map.addLayer(
					{
						"id": "Regional_Sur",
						"type": "line",
						"source": {
							"type": "geojson",
							"data": {
								"type": "FeatureCollection",
								"name": "Regional Sur",
								"crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
								"features": [
									{ "type": "Feature", "properties": { "Name": "5AGCO1", "description": "LINEA = 5AGCO1<br>REGION = SUR<br>CAMMESA = -<br>ET_ORIGEN = Chocon Oeste<br>ET_DESTINO = Agua del Cajon<br>TERNA = 1<br>KV = 500<br>ANO = 1999<br>LONGITUD = 51,6<br>SECCION = 396,56<br>CONDUCTOR = P.RIVER M<br>MATERIAL = Al\/Ac<br>NRO_X = 4<br>HILO = 73,91<br>MAT_HILO = Acero<br>RESIST = 200<br>POT_NAT = 1109,54<br>IMPEDANCIA = 225,3<br>CTE_ATENUA = 4,42E-05<br>CTE_FASE = 1,07E-03<br>VEL_PROPAG = 293200<br>" }, "geometry": { "type": "LineString", "coordinates": [ [ -68.778625854899659, -39.237285235361007 ], [ -68.77689, -39.23653 ], [ -68.773636979339472, -39.2369033186461 ], [ -68.76367, -39.22706 ], [ -68.72596, -39.18945 ], [ -68.72294, -39.18644 ], [ -68.70685, -39.17283 ], [ -68.66715, -39.13926 ], [ -68.62986, -39.10772 ], [ -68.62583, -39.10389 ], [ -68.61025, -39.08474 ], [ -68.59414, -39.06494 ], [ -68.56189, -39.0253 ], [ -68.55267, -39.01397 ], [ -68.54585, -39.00718 ], [ -68.52789, -38.98927 ], [ -68.51669, -38.97811 ], [ -68.512935246587631, -38.978448089134758 ], [ -68.50889, -38.97683 ], [ -68.47965, -38.97 ], [ -68.42099, -38.95619 ], [ -68.36403, -38.94262 ], [ -68.35675, -38.94086 ], [ -68.356188248701386, -38.939119505686193 ] ] } },
									{ "type": "Feature", "properties": { "Name": "5AGECO1", "description": "LINEA = 5AGECO1<br>REGION = SUR<br>CAMMESA = -<br>ET_ORIGEN = Agua del Cajon<br>ET_DESTINO = El Cortaderal<br>TERNA = 1<br>KV = 500<br>ANO = 2011<br>LONGITUD = 1<br>" }, "geometry": { "type": "LineString", "coordinates": [ [ -68.446498165169302, -36.669903264391337 ], [ -68.472979757389567, -37.001165689476757 ], [ -68.467737727060054, -37.108368494934602 ], [ -68.381349007005355, -37.285037807429589 ], [ -68.471835142667771, -37.648993829440819 ], [ -68.441055596300629, -37.889260520742212 ], [ -68.432534025228406, -37.921796008854642 ], [ -68.445170074043759, -37.96088091222304 ], [ -68.409710517028955, -38.113081533582502 ], [ -68.319393304650077, -38.169710313480927 ], [ -68.325498993263935, -38.324334232046787 ], [ -68.328568039602004, -38.401827810097522 ], [ -68.332271742624442, -38.496686151180747 ], [ -68.333107832900978, -38.532690157838829 ], [ -68.334103416209814, -38.610244197204473 ], [ -68.335901284405935, -38.614041639469512 ], [ -68.338100159065561, -38.622562740967062 ], [ -68.373159516053576, -38.795203679682629 ], [ -68.383183959445006, -38.832959880961369 ], [ -68.379674479333261, -38.841590753279242 ], [ -68.378148065311663, -38.842237854313872 ], [ -68.357740774021508, -38.915344660462701 ], [ -68.354412512832738, -38.923332830000383 ], [ -68.341489614784351, -38.942055014334052 ], [ -68.343004235279395, -38.94480495977448 ], [ -68.352213916799016, -38.945791244536011 ], [ -68.356163654259433, -38.941887169097413 ], [ -68.355789652184086, -38.939244763245213 ] ] } },
									{ "type": "Feature", "properties": { "Name": "5ALPG1", "description": "LINEA = 5ALPG1<br>REGION = SUR<br>CAMMESA = 46<br>ET_ORIGEN = Alicura<br>ET_DESTINO = P. del Aguila<br>TERNA = 1<br>KV = 500<br>ANO = 1984<br>LONGITUD = 76,8<br>SECCION = 317,1<br>CONDUCTOR = P.RIVER<br>MATERIAL = Al\/Ac<br>NRO_X = 4<br>HILO = 73,91<br>MAT_HILO = Acero<br>RESIST = 100<br>POT_NAT = 965,62<br>IMPEDANCIA = 258,9<br>CTE_ATENUA = 4,52E-05<br>CTE_FASE = 1,08E-03<br>VEL_PROPAG = 290700<br>" }, "geometry": { "type": "LineString", "coordinates": [ [ -70.74858656679335, -40.57939746473221 ], [ -70.748343586511098, -40.578766955959701 ], [ -70.741435182240565, -40.573874308399667 ], [ -70.729063768611027, -40.563203893965259 ], [ -70.713972980142202, -40.550242653840343 ], [ -70.70926, -40.54858 ], [ -70.68445, -40.53943 ], [ -70.65753, -40.52951 ], [ -70.63282, -40.5204 ], [ -70.60927, -40.51172 ], [ -70.590505661551603, -40.504717516731787 ], [ -70.58905, -40.49796 ], [ -70.585363965238798, -40.485415734274298 ], [ -70.57353, -40.47968 ], [ -70.55238, -40.46914 ], [ -70.54019, -40.46308 ], [ -70.52431, -40.45516 ], [ -70.50124, -40.44368 ], [ -70.47732, -40.43176 ], [ -70.45395, -40.42013 ], [ -70.43243, -40.40941 ], [ -70.41048, -40.39848 ], [ -70.38393, -40.38526 ], [ -70.36086, -40.37377 ], [ -70.33722, -40.362 ], [ -70.31564, -40.35125 ], [ -70.29556, -40.33831 ], [ -70.27485, -40.32496 ], [ -70.25417, -40.31163 ], [ -70.23215, -40.29744 ], [ -70.20866, -40.2823 ], [ -70.18651, -40.26802 ], [ -70.16543, -40.25443 ], [ -70.14322, -40.24012 ], [ -70.11838, -40.22411 ], [ -70.09826, -40.21114 ], [ -70.07644, -40.19708 ], [ -70.06003, -40.1865 ], [ -70.05211, -40.17086 ], [ -70.045028270364142, -40.164986393207172 ], [ -70.045009270830093, -40.163733894622112 ] ] } },
									{ "type": "Feature", "properties": { "Name": "5ALPG2", "description": "LINEA = 5ALPG2<br>REGION = SUR<br>CAMMESA = 47<br>ET_ORIGEN = Alicura<br>ET_DESTINO = P. del Aguila<br>TERNA = 2<br>KV = 500<br>ANO = 1984<br>LONGITUD = 76,8<br>SECCION = 317,1<br>CONDUCTOR = P.RIVER<br>MATERIAL = Al\/Ac<br>NRO_X = 4<br>HILO = 73,91<br>MAT_HILO = Acero<br>RESIST = 100<br>POT_NAT = 965,62<br>IMPEDANCIA = 258,9<br>CTE_ATENUA = 4,52E-05<br>CTE_FASE = 1,08E-03<br>VEL_PROPAG = 290700<br>" }, "geometry": { "type": "LineString", "coordinates": [ [ -70.74906888529685, -40.579388530767751 ], [ -70.748814003740762, -40.578495058608212 ], [ -70.741850689291425, -40.573036020629047 ], [ -70.73076, -40.56334 ], [ -70.715796589271321, -40.550160938322861 ], [ -70.68622, -40.53936 ], [ -70.66062, -40.52993 ], [ -70.633749852891768, -40.519956126869232 ], [ -70.605880702261814, -40.509682002512761 ], [ -70.591266846746123, -40.504258446240733 ], [ -70.590191615315661, -40.498027751098242 ], [ -70.586940076333647, -40.48533235075891 ], [ -70.5737, -40.47887 ], [ -70.55356, -40.46883 ], [ -70.5411, -40.46262 ], [ -70.52118, -40.45269 ], [ -70.49852, -40.4414 ], [ -70.47381, -40.42908 ], [ -70.45126, -40.41784 ], [ -70.43054, -40.40751 ], [ -70.41, -40.39727 ], [ -70.39172, -40.38816 ], [ -70.36957, -40.37712 ], [ -70.34474, -40.36474 ], [ -70.32272, -40.35377 ], [ -70.31744, -40.35114 ], [ -70.29819, -40.33877 ], [ -70.27672, -40.32497 ], [ -70.25572, -40.31147 ], [ -70.23596, -40.29877 ], [ -70.21421, -40.28479 ], [ -70.19234, -40.27074 ], [ -70.16794, -40.25506 ], [ -70.14556, -40.24068 ], [ -70.11901, -40.22361 ], [ -70.09969, -40.2112 ], [ -70.07751, -40.19694 ], [ -70.06061, -40.18608 ], [ -70.05222, -40.16981 ], [ -70.045400449527492, -40.164583284886596 ], [ -70.045384372622962, -40.163741242961613 ] ] } },
									{ "type": "Feature", "properties": { "Name": "5BBCL1", "description": "LINEA = 5BBCL1<br>REGION = SUR<br>CAMMESA = 73<br>ET_ORIGEN = Choele Choel<br>ET_DESTINO = B. Blanca<br>TERNA = 1<br>KV = 500<br>ANO = 1986<br>LONGITUD = 346,0<br>SECCION = 317,1<br>CONDUCTOR = P.RIVER<br>MATERIAL = Al\/Ac<br>NRO_X = 4<br>HILO = 73,91<br>MAT_HILO = Acero<br>RESIST = 100<br>POT_NAT = 965,62<br>IMPEDANCIA = 258,9<br>CTE_ATENUA = 4,52E-05<br>CTE_FASE = 1,08E-03<br>VEL_PROPAG = 290700<br>" }, "geometry": { "type": "LineString", "coordinates": [ [ -65.689885325814132, -39.568269664596137 ], [ -65.688423113085221, -39.568145404012277 ], [ -65.66879, -39.5738 ], [ -65.61595, -39.58901 ], [ -65.56384, -39.60397 ], [ -65.51744, -39.61725 ], [ -65.490928501880262, -39.617168133999691 ], [ -65.450111780005955, -39.617042204636007 ], [ -65.433560123239104, -39.604129298287191 ], [ -65.40253, -39.57944 ], [ -65.34806, -39.56162 ], [ -65.29236, -39.54339 ], [ -65.21059, -39.51646 ], [ -65.18328, -39.50747 ], [ -65.15599, -39.49848 ], [ -65.10154, -39.48054 ], [ -65.04657, -39.46235 ], [ -65.01911, -39.45323 ], [ -65.0138, -39.45146 ], [ -64.99279, -39.44448 ], [ -64.9378, -39.42618 ], [ -64.88362, -39.40814 ], [ -64.85633, -39.39906 ], [ -64.82893, -39.3899 ], [ -64.77408, -39.37158 ], [ -64.74722, -39.36261 ], [ -64.71977, -39.35341 ], [ -64.66537, -39.33517 ], [ -64.61116, -39.31696 ], [ -64.5566, -39.29858 ], [ -64.50296, -39.28049 ], [ -64.44967, -39.2625 ], [ -64.39544, -39.24414 ], [ -64.34685, -39.22764 ], [ -64.28695, -39.20729 ], [ -64.25997, -39.19781 ], [ -64.23422, -39.18815 ], [ -64.207278951225291, -39.180060914145812 ], [ -64.17937, -39.17061 ], [ -64.12512, -39.15206 ], [ -64.07074, -39.13345 ], [ -64.04453, -39.12447 ], [ -64.01828, -39.11683 ], [ -64.01314, -39.11503 ], [ -63.98219, -39.10011 ], [ -63.97469, -39.09513 ], [ -63.96778, -39.09056 ], [ -63.93822, -39.06363 ], [ -63.93383, -39.05964 ], [ -63.9346, -39.04062 ], [ -63.93525, -39.02447 ], [ -63.93458, -39.02058 ], [ -63.92482, -38.99157 ], [ -63.915162582394572, -38.96285009562181 ], [ -63.86467, -38.95057 ], [ -63.8149, -38.93847 ], [ -63.76482, -38.9263 ], [ -63.73792, -38.91976 ], [ -63.73228, -38.91839 ], [ -63.68743, -38.90738 ], [ -63.63775, -38.89519 ], [ -63.58664, -38.88264 ], [ -63.53763, -38.87061 ], [ -63.48426, -38.85751 ], [ -63.43293, -38.84491 ], [ -63.38147, -38.83228 ], [ -63.33201, -38.81991 ], [ -63.28139, -38.80726 ], [ -63.27169, -38.80483 ], [ -63.23174, -38.79066 ], [ -63.1798, -38.77222 ], [ -63.12992, -38.75452 ], [ -63.08039, -38.73694 ], [ -63.05478, -38.72739 ], [ -63.04992, -38.72578 ], [ -63.02875, -38.71856 ], [ -63.00301, -38.70936 ], [ -62.95269, -38.69135 ], [ -62.90208, -38.67324 ], [ -62.87704, -38.66428 ], [ -62.85065, -38.65484 ], [ -62.84086, -38.65133 ], [ -62.8253, -38.65123 ], [ -62.80001, -38.65106 ], [ -62.74208, -38.65067 ], [ -62.68808, -38.6503 ], [ -62.63267, -38.64993 ], [ -62.58069, -38.6495 ], [ -62.55434, -38.64887 ], [ -62.52886, -38.64827 ], [ -62.47795, -38.64706 ], [ -62.42015, -38.64551 ], [ -62.36628, -38.64395 ], [ -62.30738, -38.64224 ], [ -62.25639, -38.64094 ], [ -62.057616820832941, -38.657528682339724 ], [ -62.054956589500136, -38.656912693774522 ] ] } },
									{ "type": "Feature", "properties": { "Name": "5BBGBR1", "description": "LINEA = 5BBGBR1<br>REGION = SUR<br>CAMMESA = -<br>ET_ORIGEN = G. Brown<br>ET_DESTINO = B. Blanca<br>TERNA = 2<br>KV = 500<br>ANO = 1999<br>LONGITUD = 41,5<br>SECCION = 396,56<br>CONDUCTOR = P.RIVER M<br>MATERIAL = Al\/Ac<br>NRO_X = 4<br>HILO = 73,91<br>MAT_HILO = Acero<br>RESIST = 200<br>POT_NAT = 1110,77<br>IMPEDANCIA = 225,1<br>CTE_ATENUA = 4,47E-05<br>CTE_FASE = 1,07E-03<br>VEL_PROPAG = 293500<br>" }, "geometry": { "type": "LineString", "coordinates": [ [ -62.416370985747953, -38.683620348763696 ], [ -62.423381258486152, -38.678221969502523 ], [ -62.420360601411588, -38.665441947563643 ], [ -62.422637396571893, -38.645001106521953 ], [ -62.421355414561262, -38.608634850380007 ], [ -62.41103, -38.60866 ], [ -62.35254, -38.60835 ], [ -62.29781, -38.60803 ], [ -62.24238, -38.60769 ], [ -62.23624, -38.60765 ], [ -62.23161, -38.60762 ], [ -62.18752, -38.62075 ], [ -62.13321, -38.63689 ], [ -62.10662, -38.64398 ], [ -62.07837, -38.65128 ], [ -62.06119, -38.65572 ], [ -62.0566, -38.65691 ], [ -62.055132139263911, -38.656542385792847 ] ] } },
									{ "type": "Feature", "properties": { "Name": "5BBOL1", "description": "LINEA = 5BBOL1<br>REGION = SUR<br>CAMMESA = 75<br>ET_ORIGEN = B. Blanca<br>ET_DESTINO =Olavarria<br>TERNA = 1<br>KV = 500<br>ANO = 1986<br>LONGITUD = 255,4<br>SECCION = 317,1<br>CONDUCTOR = P.RIVER<br>MATERIAL = Al\/Ac<br>NRO_X = 4<br>HILO = 73,91<br>MAT_HILO = Acero<br>RESIST = 100<br>POT_NAT = 965,62<br>IMPEDANCIA = 258,9<br>CTE_ATENUA = 4,52E-05<br>CTE_FASE = 1,08E-03<br>VEL_PROPAG = 290700<br>" }, "geometry": { "type": "LineString", "coordinates": [ [ -62.052445040215218, -38.656039088028017 ], [ -62.05103, -38.65531 ], [ -62.04123, -38.63993 ], [ -62.02966, -38.62173 ], [ -62.01803, -38.60342 ], [ -62.00645, -38.58519 ], [ -61.98594, -38.55289 ], [ -61.98338, -38.54975 ], [ -61.96934, -38.53254 ], [ -61.93976, -38.49627 ], [ -61.91146, -38.4615 ], [ -61.88194, -38.42527 ], [ -61.85333, -38.38999 ], [ -61.85044, -38.38643 ], [ -61.82469, -38.35467 ], [ -61.82192, -38.35125 ], [ -61.81099, -38.33776 ], [ -61.80733, -38.33324 ], [ -61.79631, -38.31965 ], [ -61.79345, -38.31612 ], [ -61.79011, -38.312 ], [ -61.78736, -38.30861 ], [ -61.76522, -38.28514 ], [ -61.76195, -38.28165 ], [ -61.73462, -38.25262 ], [ -61.73155, -38.24936 ], [ -61.71918, -38.23624 ], [ -61.70675, -38.22305 ], [ -61.70369, -38.21981 ], [ -61.70825, -38.19831 ], [ -61.71271, -38.17726 ], [ -61.71693, -38.1573 ], [ -61.71786, -38.15292 ], [ -61.70318, -38.14013 ], [ -61.66698, -38.10859 ], [ -61.63198, -38.07809 ], [ -61.59489, -38.04572 ], [ -61.57606, -38.02928 ], [ -61.5587, -38.01414 ], [ -61.54019, -37.998 ], [ -61.52458, -37.98145 ], [ -61.50889, -37.96481 ], [ -61.48997061854115, -37.944642133314026 ] ] } },
									{ "type": "Feature", "properties": { "Name": "5ESPRSC1", "description": "LINEA = 5RSCESP1<br>REGION = SUR<br>ET_ORIGEN = LA ESPERANZA<br>ET_DESTINO = RIO SANTA CRUZ<br>TERNA = 1<br>KV = 500<br>ANO = 2014<br>LONGITUD = 171,0 km<br>" }, "geometry": { "type": "LineString", "coordinates": [ [ -68.974792892899757, -49.986603503507929 ], [ -68.975694754438393, -49.987229726030087 ], [ -69.034312274532624, -50.034285331725179 ], [ -69.136687702069423, -50.065844006316503 ], [ -69.229375263917433, -50.143773434161488 ], [ -69.260396521795144, -50.165481080776601 ], [ -69.301738138034423, -50.177936253955288 ], [ -69.401745794054165, -50.246765198619613 ], [ -69.514619675562628, -50.30071080899743 ], [ -69.67643237895976, -50.400330978126128 ], [ -70.051196818446442, -50.6505884739503 ], [ -70.641774136839118, -50.999911735759717 ], [ -70.658500921851484, -51.009875299286357 ], [ -70.671954626163142, -51.017771358935462 ], [ -70.713954525425436, -51.041055741691018 ], [ -70.714071607907101, -51.041319373048204 ] ] } },
									{ "type": "Feature", "properties": { "Name": "5BBOL2", "description": "LINEA = 5BBOL2<br>REGION = SUR<br>CAMMESA = -<br>ET_ORIGEN = B. Blanca<br>ET_DESTINO = Olavarria<br>TERNA = 2<br>KV = 500<br>ANO = 1999<br>LONGITUD = 260,0<br>SECCION = 396,56<br>CONDUCTOR = P.RIVER M<br>MATERIAL = Al\/Ac<br>NRO_X = 4<br>HILO = 73,91<br>MAT_HILO = Acero<br>RESIST = 100<br>POT_NAT = 1110,76<br>IMPEDANCIA = 225,1<br>CTE_ATENUA = 4,47E-05<br>CTE_FASE = 1,07E-03<br>VEL_PROPAG = 293500<br>" }, "geometry": { "type": "LineString", "coordinates": [ [ -62.052614745350468, -38.655625892916113 ], [ -62.05155, -38.65503 ], [ -62.04179, -38.63921 ], [ -62.02814, -38.61774 ], [ -62.01503, -38.5971 ], [ -61.98936, -38.55563 ], [ -61.97713, -38.53553 ], [ -61.96498, -38.51556 ], [ -61.95269, -38.49535 ], [ -61.93947, -38.47482 ], [ -61.931962691498619, -38.462383448155293 ], [ -61.927958485790079, -38.454768280204839 ], [ -61.925504987973738, -38.450128015909733 ], [ -61.908777923374252, -38.436555147180229 ], [ -61.86693, -38.40304 ], [ -61.86326, -38.3997 ], [ -61.85637, -38.39274 ], [ -61.85059, -38.38606 ], [ -61.83597, -38.36803 ], [ -61.82485, -38.35431 ], [ -61.82208, -38.35089 ], [ -61.8075, -38.33288 ], [ -61.79659, -38.31941 ], [ -61.79364, -38.31576 ], [ -61.78756, -38.30824 ], [ -61.77841, -38.2985 ], [ -61.76544, -38.28473 ], [ -61.76217, -38.28126 ], [ -61.75024, -38.26858 ], [ -61.74729, -38.26543 ], [ -61.7318, -38.24897 ], [ -61.71664, -38.23283 ], [ -61.70757, -38.22316 ], [ -61.70741, -38.22001 ], [ -61.70752, -38.21579 ], [ -61.70871, -38.20313 ], [ -61.71199, -38.19989 ], [ -61.72846, -38.1853 ], [ -61.74434, -38.17089 ], [ -61.75319, -38.16153 ], [ -61.75448, -38.15228 ], [ -61.75606, -38.14095 ], [ -61.75115, -38.13517 ], [ -61.73598, -38.11733 ], [ -61.72071, -38.09936 ], [ -61.69173, -38.06524 ], [ -61.67999, -38.05141 ], [ -61.67614, -38.0484 ], [ -61.63912, -38.01952 ], [ -61.64009, -38.01591 ], [ -61.64129, -38.0115 ], [ -61.64245, -38.00721 ], [ -61.63242, -37.99545 ], [ -61.6005, -37.95621 ], [ -61.55663, -37.90109 ], [ -61.555925277114319, -37.900462867697023 ] ] } },
									{ "type": "Feature", "properties": { "Name": "5CCPB1", "description": "LINEA = 5CCPB1<br>REGION = SUR<br>CAMMESA = 57<br>ET_ORIGEN = P.Banderita<br>ET_DESTINO = C. de la Costa<br>TERNA = 1<br>KV = 500<br>ANO = 1977<br>LONGITUD = 25,8<br>SECCION = 282,6<br>CONDUCTOR = DOVE<br>MATERIAL = Al\/Ac<br>NRO_X = 4<br>HILO = 72,23<br>MAT_HILO = Acero<br>RESIST = 100<br>POT_NAT = 963,39<br>IMPEDANCIA = 259,5<br>CTE_ATENUA = 5,00E-05<br>CTE_FASE = 1,08E-03<br>VEL_PROPAG = 291900<br>" }, "geometry": { "type": "LineString", "coordinates": [ [ -68.472754483062573, -38.560074754135677 ], [ -68.47192, -38.56028 ], [ -68.46958, -38.56131 ], [ -68.46325, -38.566 ], [ -68.4328, -38.58895 ], [ -68.41766, -38.60029 ], [ -68.38689, -38.62334 ], [ -68.35774, -38.64514 ], [ -68.3286, -38.66693 ], [ -68.25864, -38.71894 ], [ -68.25797, -38.71939 ] ] } },
									{ "type": "Feature", "properties": { "Name": "5CHCH1", "description": "LINEA = 5CHCH1<br>REGION = SUR<br>CAMMESA = 41<br>ET_ORIGEN = C.H. Chocon<br>ET_DESTINO = Chocon<br>TERNA = 1<br>KV = 500<br>ANO = 1974<br>LONGITUD = 1,2<br>SECCION = 282,6<br>CONDUCTOR = DOVE<br>MATERIAL = Al\/Ac<br>NRO_X = 4<br>HILO = 72,23<br>MAT_HILO = Acero<br>RESIST = 100<br>POT_NAT = 963,39<br>IMPEDANCIA = 259,5<br>CTE_ATENUA = 5,00E-05<br>CTE_FASE = 1,08E-03<br>VEL_PROPAG = 291900<br>" }, "geometry": { "type": "LineString", "coordinates": [ [ -68.75644, -39.26569 ], [ -68.752392627474592, -39.264847914285717 ], [ -68.748635488095744, -39.258209875812909 ] ] } },
									{ "type": "Feature", "properties": { "Name": "5CHCH3", "description": "LINEA = 5CHCH3<br>REGION = SUR<br>CAMMESA = 42<br>ET_ORIGEN = C.H. Chocon<br>ET_DESTINO = Chocon<br>TERNA = 3<br>KV = 500<br>ANO = 1974<br>LONGITUD = 1,2<br>SECCION = 282,6<br>CONDUCTOR = DOVE<br>MATERIAL = Al\/Ac<br>NRO_X = 4<br>HILO = 72,23<br>MAT_HILO = Acero<br>RESIST = 100<br>POT_NAT = 963,39<br>IMPEDANCIA = 259,5<br>CTE_ATENUA = 5,00E-05<br>CTE_FASE = 1,08E-03<br>VEL_PROPAG = 291900<br>" }, "geometry": { "type": "LineString", "coordinates": [ [ -68.75656, -39.26619 ], [ -68.75194, -39.26525 ], [ -68.747863795275123, -39.25846965760833 ] ] } },
									{ "type": "Feature", "properties": { "Name": "5CHCH5", "description": "LINEA = 5CHCH5<br>REGION = SUR<br>CAMMESA = 43<br>ET_ORIGEN = C.H. Chocon<br>ET_DESTINO = Chocon<br>TERNA = 5<br>KV = 500<br>ANO = 1974<br>LONGITUD = 1,3<br>SECCION = 282,6<br>CONDUCTOR = DOVE<br>MATERIAL = Al\/Ac<br>NRO_X = 4<br>HILO = 72,23<br>MAT_HILO = Acero<br>RESIST = 100<br>POT_NAT = 963,39<br>IMPEDANCIA = 259,5<br>CTE_ATENUA = 5,00E-05<br>CTE_FASE = 1,08E-03<br>VEL_PROPAG = 291900<br>" }, "geometry": { "type": "LineString", "coordinates": [ [ -68.75658, -39.26669 ], [ -68.75158, -39.26564 ], [ -68.747220871388791, -39.25871641965027 ] ] } },
									{ "type": "Feature", "properties": { "Name": "5CHCO1", "description": "LINEA = 5CHCO1<br>REGION = SUR<br>CAMMESA = 44<br>ET_ORIGEN = Chocon<br>ET_DESTINO = Chocon Oeste<br>TERNA = 1<br>KV = 500<br>ANO = 1984<br>LONGITUD = 3,4<br>SECCION = 317,1<br>CONDUCTOR = P.RIVER<br>MATERIAL = Al\/Ac<br>NRO_X = 4<br>HILO = 73,91<br>MAT_HILO = Acero<br>RESIST = 100<br>POT_NAT = 965,62<br>IMPEDANCIA = 258,9<br>CTE_ATENUA = 4,52E-05<br>CTE_FASE = 1,08E-03<br>VEL_PROPAG = 290700<br>" }, "geometry": { "type": "LineString", "coordinates": [ [ -68.749813309805091, -39.257541390153321 ], [ -68.75094541174775, -39.257150108887792 ], [ -68.766768110513723, -39.243190636068007 ], [ -68.778412310748507, -39.239862244849959 ], [ -68.77971841515523, -39.238501137181352 ] ] } },
									{ "type": "Feature", "properties": { "Name": "5CHCO2", "description": "LINEA = 5CHCO2<br>REGION = SUR<br>CAMMESA = 45<br>ET_ORIGEN = Chocon<br>ET_DESTINO = Chocon Oeste<br>TERNA = 2<br>KV = 500<br>ANO = 1984<br>LONGITUD = 3,5<br>SECCION = 317,1<br>CONDUCTOR = P.RIVER<br>MATERIAL = Al\/Ac<br>NRO_X = 4<br>HILO = 73,91<br>MAT_HILO = Acero<br>RESIST = 100<br>POT_NAT = 965,62<br>IMPEDANCIA = 258,9<br>CTE_ATENUA = 4,52E-05<br>CTE_FASE = 1,08E-03<br>VEL_PROPAG = 290700<br>" }, "geometry": { "type": "LineString", "coordinates": [ [ -68.749657477917211, -39.257287424263623 ], [ -68.75064395906962, -39.256933482474537 ], [ -68.763334903872149, -39.243400894561141 ], [ -68.777047310953051, -39.238933702184141 ], [ -68.778634044311275, -39.237750044469351 ] ] } },
									{ "type": "Feature", "properties": { "Name": "5CLCO1", "description": "LINEA = 5CLCO1<br>REGION = SUR<br>CAMMESA = 55<br>ET_ORIGEN = Chocon Oeste<br>ET_DESTINO = Choele Choel<br>TERNA = 1<br>KV = 500<br>ANO = 1986<br>LONGITUD = 269,7<br>SECCION = 317,1<br>CONDUCTOR = P.RIVER<br>MATERIAL = Al\/Ac<br>NRO_X = 4<br>HILO = 73,91<br>MAT_HILO = Acero<br>RESIST = 100<br>POT_NAT = 965,62<br>IMPEDANCIA = 258,9<br>CTE_ATENUA = 4,52E-05<br>CTE_FASE = 1,08E-03<br>VEL_PROPAG = 290700<br>" }, "geometry": { "type": "LineString", "coordinates": [ [ -68.778909001832503, -39.237039653285109 ], [ -68.777479589526649, -39.236083997807008 ], [ -68.76054, -39.23592 ], [ -68.73594, -39.23564 ], [ -68.73069, -39.23656 ], [ -68.72208, -39.23758 ], [ -68.711345938819903, -39.246472364348179 ], [ -68.70847, -39.24886 ], [ -68.68909, -39.25632 ], [ -68.662180881948359, -39.267012533623543 ], [ -68.635031098079679, -39.277556005218003 ], [ -68.6075, -39.28772 ], [ -68.60225, -39.28972 ], [ -68.58171, -39.29824 ], [ -68.55714, -39.30783 ], [ -68.53082, -39.31805 ], [ -68.50664, -39.3275 ], [ -68.48103, -39.33733 ], [ -68.4546, -39.3475 ], [ -68.445944307180113, -39.350848292177922 ], [ -68.43021, -39.35231 ], [ -68.40282, -39.35476 ], [ -68.37379, -39.35736 ], [ -68.3445, -39.35998 ], [ -68.31523, -39.36258 ], [ -68.28583, -39.36516 ], [ -68.25659, -39.36774 ], [ -68.22713, -39.37033 ], [ -68.20038, -39.37271 ], [ -68.17218, -39.37524 ], [ -68.14232, -39.37792 ], [ -68.11296, -39.38055 ], [ -68.08355, -39.38315 ], [ -68.05475, -39.38567 ], [ -68.03042, -39.38781 ], [ -68.00096, -39.39039 ], [ -67.97315, -39.39271 ], [ -67.94238, -39.39526 ], [ -67.9131, -39.39768 ], [ -67.88311, -39.40016 ], [ -67.85347, -39.40265 ], [ -67.82355, -39.40528 ], [ -67.79462, -39.40783 ], [ -67.76606, -39.41035 ], [ -67.73689, -39.4129 ], [ -67.70686, -39.41542 ], [ -67.67804, -39.41785 ], [ -67.6488, -39.4203 ], [ -67.62024, -39.4227 ], [ -67.59094, -39.42513 ], [ -67.56118, -39.4276 ], [ -67.5318, -39.43004 ], [ -67.50227, -39.43247 ], [ -67.47308, -39.43482 ], [ -67.44494, -39.43709 ], [ -67.41547, -39.43946 ], [ -67.38556, -39.44187 ], [ -67.35646, -39.44422 ], [ -67.32704, -39.44661 ], [ -67.29875, -39.4489 ], [ -67.27009, -39.45123 ], [ -67.24223, -39.45348 ], [ -67.2144, -39.45572 ], [ -67.18483, -39.45811 ], [ -67.15877, -39.4602 ], [ -67.13294, -39.4622 ], [ -67.10398, -39.46445 ], [ -67.07469, -39.46672 ], [ -67.04527, -39.46901 ], [ -67.01548, -39.47132 ], [ -66.98597, -39.4736 ], [ -66.95605, -39.47591 ], [ -66.92696, -39.47816 ], [ -66.89757, -39.48044 ], [ -66.86793, -39.48269 ], [ -66.83806, -39.48494 ], [ -66.8082, -39.4872 ], [ -66.77929, -39.48939 ], [ -66.74988, -39.49161 ], [ -66.7203, -39.49384 ], [ -66.6908, -39.49607 ], [ -66.66162, -39.49827 ], [ -66.63175, -39.5005 ], [ -66.60241, -39.50268 ], [ -66.57324, -39.50485 ], [ -66.54352, -39.50706 ], [ -66.51384, -39.50924 ], [ -66.48427, -39.5114 ], [ -66.45478, -39.51356 ], [ -66.42543, -39.51571 ], [ -66.39601, -39.51785 ], [ -66.36641, -39.52 ], [ -66.33666, -39.52217 ], [ -66.30725, -39.52431 ], [ -66.27751, -39.52641 ], [ -66.2481, -39.52848 ], [ -66.21832, -39.53058 ], [ -66.18894, -39.53265 ], [ -66.15948, -39.53471 ], [ -66.12978, -39.5368 ], [ -66.10064, -39.53884 ], [ -66.07141, -39.54089 ], [ -66.04165, -39.54295 ], [ -66.01228, -39.54498 ], [ -65.98276, -39.54701 ], [ -65.95328, -39.54905 ], [ -65.92416, -39.55103 ], [ -65.89473, -39.55303 ], [ -65.86535, -39.55503 ], [ -65.83572, -39.55704 ], [ -65.80603, -39.55903 ], [ -65.77641, -39.56101 ], [ -65.74607, -39.56304 ], [ -65.71594, -39.56505 ], [ -65.71011, -39.56544 ], [ -65.69547, -39.568 ], [ -65.69398101508007, -39.568019180073023 ] ] } },
									{ "type": "Feature", "properties": { "Name": "5CHPU1", "description": "LINEA = 5CHPU1<br>REGION = SUR<br>CAMMESA = 53\/58<br>ET_ORIGEN = Chocon<br>ET_DESTINO = Puelches<br>TERNA = 1<br>KV = 500<br>ANO = 1974<br>LONGITUD = 303,6<br>SECCION = 282,6<br>CONDUCTOR = DOVE<br>MATERIAL = Al\/Ac<br>NRO_X = 4<br>HILO = 72,23<br>MAT_HILO = Acero<br>RESIST = 100<br>POT_NAT = 963,39<br>IMPEDANCIA = 259,5<br>CTE_ATENUA = 5,00E-05<br>CTE_FASE = 1,08E-03<br>VEL_PROPAG = 291900<br>" }, "geometry": { "type": "LineString", "coordinates": [ [ -68.747128424453862, -39.25783296706971 ], [ -68.742878887578541, -39.250794936539833 ], [ -68.734, -39.23886 ], [ -68.7274, -39.23077 ], [ -68.71293, -39.21301 ], [ -68.69813, -39.19486 ], [ -68.67119, -39.16181 ], [ -68.64356, -39.12791 ], [ -68.62966, -39.11087 ], [ -68.60021, -39.07474 ], [ -68.57066, -39.0385 ], [ -68.55694, -39.02166 ], [ -68.55133, -39.01478 ], [ -68.54165, -39.00512 ], [ -68.52487, -38.98839 ], [ -68.5087, -38.97227 ], [ -68.47624, -38.93991 ], [ -68.445, -38.90875 ], [ -68.41347, -38.87721 ], [ -68.38037, -38.84407 ], [ -68.34833, -38.812 ], [ -68.3157, -38.77924 ], [ -68.2832, -38.74656 ], [ -68.26684, -38.73011 ], [ -68.23369, -38.69672 ], [ -68.23356, -38.65553 ], [ -68.21639, -38.64583 ], [ -68.17295, -38.62144 ], [ -68.15104, -38.60914 ], [ -68.11035, -38.58629 ], [ -68.10647, -38.58411 ], [ -68.06393, -38.57455 ], [ -68.01333, -38.56319 ], [ -67.96213, -38.55164 ], [ -67.91629, -38.54131 ], [ -67.91133, -38.54019 ], [ -67.86061, -38.52873 ], [ -67.80944, -38.51717 ], [ -67.75847, -38.50559 ], [ -67.70667, -38.49381 ], [ -67.65672, -38.48242 ], [ -67.60722, -38.47114 ], [ -67.55609, -38.45941 ], [ -67.50464, -38.44761 ], [ -67.49932, -38.44638 ], [ -67.40017, -38.42353 ], [ -67.39485, -38.42231 ], [ -67.34925, -38.41176 ], [ -67.32454, -38.40604 ], [ -67.301696251209762, -38.400659747471472 ], [ -67.27558, -38.3947 ], [ -67.25084, -38.38897 ], [ -67.24579, -38.38779 ], [ -67.24083, -38.38663 ], [ -67.23583, -38.38547 ], [ -67.23084, -38.3843 ], [ -67.22584, -38.38313 ], [ -67.2208, -38.38196 ], [ -67.21575, -38.38078 ], [ -67.21059, -38.37957 ], [ -67.20554, -38.3784 ], [ -67.2006, -38.37724 ], [ -67.19549, -38.37605 ], [ -67.19044, -38.37487 ], [ -67.18539, -38.3737 ], [ -67.18034, -38.37252 ], [ -67.17524, -38.37133 ], [ -67.1706, -38.37024 ], [ -67.16566, -38.36909 ], [ -67.16061, -38.36791 ], [ -67.15556, -38.36674 ], [ -67.15062, -38.36558 ], [ -67.14595, -38.36449 ], [ -67.14156, -38.36347 ], [ -67.14081, -38.36001 ], [ -67.14, -38.35628 ], [ -67.1392, -38.3526 ], [ -67.13851, -38.3494 ], [ -67.13775, -38.34592 ], [ -67.13307, -38.34501 ], [ -67.12824, -38.34407 ], [ -67.12314, -38.34307 ], [ -67.11798, -38.34207 ], [ -67.11293, -38.34108 ], [ -67.10782, -38.34009 ], [ -67.10272, -38.3391 ], [ -67.09761, -38.3381 ], [ -67.09256, -38.33712 ], [ -67.08746, -38.33612 ], [ -67.0823, -38.33512 ], [ -67.07714, -38.33411 ], [ -67.07209, -38.33313 ], [ -67.06699, -38.33213 ], [ -67.06194, -38.33115 ], [ -67.05683, -38.33016 ], [ -67.05178, -38.32917 ], [ -67.04673, -38.32819 ], [ -67.04163, -38.3272 ], [ -67.03647, -38.32619 ], [ -67.03136, -38.32519 ], [ -67.02625, -38.3242 ], [ -67.0212, -38.32321 ], [ -67.01603, -38.3222 ], [ -67.01098, -38.32121 ], [ -67.00648, -38.32034 ], [ -67.00131, -38.31933 ], [ -66.99626, -38.31834 ], [ -66.9912, -38.31735 ], [ -66.9862, -38.31638 ], [ -66.98121, -38.3154 ], [ -66.97615, -38.31442 ], [ -66.9711, -38.31343 ], [ -66.96604, -38.31244 ], [ -66.96099, -38.31146 ], [ -66.95593, -38.31047 ], [ -66.95082, -38.30947 ], [ -66.94572, -38.30848 ], [ -66.94061, -38.30748 ], [ -66.93544, -38.30647 ], [ -66.93034, -38.30547 ], [ -66.92496, -38.30443 ], [ -66.91953, -38.30337 ], [ -66.91404, -38.30229 ], [ -66.90855, -38.30122 ], [ -66.90339, -38.30022 ], [ -66.89857, -38.29928 ], [ -66.89308, -38.29821 ], [ -66.88792, -38.2972 ], [ -66.88243, -38.29613 ], [ -66.8775, -38.29517 ], [ -66.87234, -38.29416 ], [ -66.86757, -38.29323 ], [ -66.86236, -38.29221 ], [ -66.85803, -38.29137 ], [ -66.85271, -38.29033 ], [ -66.8475, -38.28931 ], [ -66.84234, -38.28831 ], [ -66.83702, -38.28727 ], [ -66.83236, -38.28636 ], [ -66.82719, -38.28534 ], [ -66.82209, -38.28434 ], [ -66.81698, -38.28334 ], [ -66.81281, -38.28252 ], [ -66.8076, -38.28149 ], [ -66.80194, -38.28038 ], [ -66.79733, -38.27947 ], [ -66.79261, -38.27855 ], [ -66.7874, -38.27752 ], [ -66.78212, -38.27648 ], [ -66.77695, -38.27547 ], [ -66.77174, -38.27444 ], [ -66.76669, -38.27345 ], [ -66.76153, -38.27243 ], [ -66.75615, -38.27138 ], [ -66.75127, -38.27042 ], [ -66.74633, -38.26945 ], [ -66.74095, -38.26839 ], [ -66.73646, -38.26751 ], [ -66.73119, -38.26647 ], [ -66.72598, -38.26544 ], [ -66.72089, -38.26442 ], [ -66.71557, -38.26337 ], [ -66.71048, -38.26235 ], [ -66.70549, -38.26136 ], [ -66.70045, -38.26036 ], [ -66.69547, -38.25937 ], [ -66.69031, -38.25835 ], [ -66.6851, -38.25731 ], [ -66.67982, -38.25627 ], [ -66.67561, -38.25543 ], [ -66.6705, -38.25441 ], [ -66.66546, -38.25341 ], [ -66.66041, -38.25241 ], [ -66.65534, -38.2514 ], [ -66.64997, -38.25034 ], [ -66.64493, -38.24933 ], [ -66.63989, -38.24833 ], [ -66.63496, -38.24735 ], [ -66.62981, -38.24633 ], [ -66.62472, -38.24532 ], [ -66.61968, -38.24432 ], [ -66.61459, -38.24331 ], [ -66.60955, -38.24231 ], [ -66.60452, -38.24132 ], [ -66.59953, -38.24033 ], [ -66.59455, -38.23934 ], [ -66.58957, -38.23835 ], [ -66.58442, -38.23733 ], [ -66.57911, -38.23628 ], [ -66.57374, -38.23521 ], [ -66.56843, -38.23414 ], [ -66.56323, -38.2331 ], [ -66.55814, -38.23208 ], [ -66.55307, -38.23107 ], [ -66.54797, -38.23005 ], [ -66.54288, -38.22903 ], [ -66.53779, -38.22802 ], [ -66.5327, -38.227 ], [ -66.52766, -38.22599 ], [ -66.52257, -38.22497 ], [ -66.51709, -38.22388 ], [ -66.51189, -38.22284 ], [ -66.50675, -38.22181 ], [ -66.50193, -38.22084 ], [ -66.49678, -38.21981 ], [ -66.49158, -38.21877 ], [ -66.48588, -38.21763 ], [ -66.48062, -38.21658 ], [ -66.47537, -38.21553 ], [ -66.47022, -38.2145 ], [ -66.46507, -38.21346 ], [ -66.45998, -38.21244 ], [ -66.45483, -38.21141 ], [ -66.44968, -38.21037 ], [ -66.44487, -38.2094 ], [ -66.43972, -38.20837 ], [ -66.4344, -38.2073 ], [ -66.42986, -38.20639 ], [ -66.42477, -38.20536 ], [ -66.41951, -38.2043 ], [ -66.41447, -38.20329 ], [ -66.40955, -38.2023 ], [ -66.40418, -38.20122 ], [ -66.39892, -38.20016 ], [ -66.39388, -38.19915 ], [ -66.38873, -38.19811 ], [ -66.38364, -38.19709 ], [ -66.37843, -38.19604 ], [ -66.37345, -38.19504 ], [ -66.36797, -38.19394 ], [ -66.36256, -38.19285 ], [ -66.35743, -38.19181 ], [ -66.35229, -38.19077 ], [ -66.34655, -38.18961 ], [ -66.34142, -38.18857 ], [ -66.33612, -38.1875 ], [ -66.33115, -38.18649 ], [ -66.32652, -38.18556 ], [ -66.32138, -38.18452 ], [ -66.3162, -38.18347 ], [ -66.31106, -38.18243 ], [ -66.3061, -38.18142 ], [ -66.3008, -38.18035 ], [ -66.29566, -38.17931 ], [ -66.29053, -38.17828 ], [ -66.28551, -38.17726 ], [ -66.28037, -38.17622 ], [ -66.27519, -38.17517 ], [ -66.27027, -38.17418 ], [ -66.26514, -38.17314 ], [ -66.25989, -38.17208 ], [ -66.25519, -38.17113 ], [ -66.24989, -38.17005 ], [ -66.2447, -38.169 ], [ -66.23972, -38.168 ], [ -66.23464, -38.16697 ], [ -66.22956, -38.16594 ], [ -66.22458, -38.16493 ], [ -66.22, -38.164 ], [ -66.21458, -38.16291 ], [ -66.21066, -38.16211 ], [ -66.20508, -38.16098 ], [ -66.19972, -38.1599 ], [ -66.19414, -38.15877 ], [ -66.18933, -38.1578 ], [ -66.18486, -38.15689 ], [ -66.17994, -38.15589 ], [ -66.17458, -38.15481 ], [ -66.169, -38.15368 ], [ -66.16386, -38.15264 ], [ -66.15968, -38.15179 ], [ -66.15465, -38.15077 ], [ -66.14919, -38.14966 ], [ -66.14394, -38.1486 ], [ -66.13847, -38.14749 ], [ -66.13323, -38.14642 ], [ -66.12798, -38.14536 ], [ -66.12313, -38.14437 ], [ -66.11794, -38.14332 ], [ -66.11264, -38.14225 ], [ -66.10712, -38.14112 ], [ -66.10193, -38.14007 ], [ -66.0968, -38.13903 ], [ -66.09166, -38.13799 ], [ -66.08642, -38.13692 ], [ -66.08117, -38.13586 ], [ -66.07576, -38.13476 ], [ -66.07046, -38.13368 ], [ -66.06526, -38.13263 ], [ -66.05991, -38.13154 ], [ -66.056, -38.13075 ], [ -66.05151, -38.13229 ], [ -66.04749, -38.13367 ], [ -66.04269, -38.13532 ], [ -66.03872, -38.13669 ], [ -66.03467, -38.13808 ], [ -66.03058, -38.13949 ], [ -66.02536, -38.14128 ], [ -66.02035, -38.143 ], [ -66.01529, -38.14474 ], [ -66.01012, -38.14652 ], [ -66.00506, -38.14826 ], [ -66.00021, -38.14993 ], [ -65.99509, -38.15168 ], [ -65.99055, -38.15324 ], [ -65.98528, -38.15506 ], [ -65.98022, -38.1568 ], [ -65.97515, -38.15854 ], [ -65.9703, -38.1602 ], [ -65.96522, -38.16195 ], [ -65.9601, -38.16371 ], [ -65.95546, -38.16531 ], [ -65.95071, -38.16694 ], [ -65.94625, -38.16847 ], [ -65.94125, -38.16778 ], [ -65.93613, -38.16709 ], [ -65.93096, -38.1664 ], [ -65.92573, -38.1657 ], [ -65.92056, -38.165 ], [ -65.91556, -38.16433 ], [ -65.9096, -38.16353 ], [ -65.90443, -38.16284 ], [ -65.89965, -38.16219 ], [ -65.8942, -38.16146 ], [ -65.88919, -38.16079 ], [ -65.88475, -38.16019 ], [ -65.87902, -38.15942 ], [ -65.87379, -38.15872 ], [ -65.86879, -38.15805 ], [ -65.86389, -38.15739 ], [ -65.8585, -38.15667 ], [ -65.85333, -38.15597 ], [ -65.84804, -38.15526 ], [ -65.84281, -38.15456 ], [ -65.83781, -38.15389 ], [ -65.83311, -38.15321 ], [ -65.82806, -38.15248 ], [ -65.82286, -38.15172 ], [ -65.822418439074681, -38.151491287215457 ] ] } },
									{ "type": "Feature", "properties": { "Name": "5CHPU2", "description": "LINEA = 5CHPU2<br>REGION = SUR<br>CAMMESA = 54\/59<br>ET_ORIGEN = Chocon<br>ET_DESTINO = Puelches<br>TERNA = 2<br>KV = 500<br>ANO = 1976<br>LONGITUD = 303,6<br>SECCION = 282,6<br>CONDUCTOR = DOVE<br>MATERIAL = Al\/Ac<br>NRO_X = 4<br>HILO = 72,23<br>MAT_HILO = Acero<br>RESIST = 100<br>POT_NAT = 963,39<br>IMPEDANCIA = 259,5<br>CTE_ATENUA = 5,00E-05<br>CTE_FASE = 1,08E-03<br>VEL_PROPAG = 291900<br>" }, "geometry": { "type": "LineString", "coordinates": [ [ -68.748522090803846, -39.257300040126609 ], [ -68.748115878597645, -39.257015483757222 ], [ -68.744591943958895, -39.251737197190792 ], [ -68.73482, -39.23849 ], [ -68.72901, -39.23137 ], [ -68.71542, -39.2147 ], [ -68.70198, -39.19823 ], [ -68.68791, -39.18096 ], [ -68.6608, -39.14773 ], [ -68.63194, -39.11234 ], [ -68.60293, -39.07676 ], [ -68.58827, -39.0588 ], [ -68.5738, -39.04106 ], [ -68.55946, -39.02347 ], [ -68.552026576239243, -39.014355240589182 ], [ -68.54578, -39.00813 ], [ -68.52914, -38.99153 ], [ -68.51336, -38.97578 ], [ -68.44593, -38.9086 ], [ -68.41569, -38.87834 ], [ -68.385587499006348, -38.848115097767959 ], [ -68.35429932114485, -38.816872374544083 ], [ -68.321703415360986, -38.784161014371243 ], [ -68.289635023445726, -38.751765227729088 ], [ -68.273491367949106, -38.735555803272682 ], [ -68.25729, -38.71937 ], [ -68.25405, -38.71607 ], [ -68.24118, -38.70312 ], [ -68.23428, -38.69541 ], [ -68.234533376870914, -38.684136976533232 ], [ -68.234664427252824, -38.663681352903133 ], [ -68.23449, -38.65618 ], [ -68.23448, -38.65521 ], [ -68.22484, -38.64966 ], [ -68.181965092267788, -38.625566906136612 ], [ -68.138274220467352, -38.60107270694003 ], [ -68.117671199959361, -38.589519269844978 ], [ -68.106783776719013, -38.583394773519487 ], [ -68.073845658926388, -38.576025050450063 ], [ -68.0231, -38.56466 ], [ -67.97234, -38.5533 ], [ -67.89599, -38.53603 ], [ -67.82073, -38.51899 ], [ -67.76954, -38.50736 ], [ -67.69226, -38.48978 ], [ -67.64256, -38.47847 ], [ -67.59088, -38.46668 ], [ -67.54009, -38.45502 ], [ -67.48926, -38.44333 ], [ -67.43975, -38.43192 ], [ -67.38974, -38.42039 ], [ -67.33922, -38.4087 ], [ -67.2886, -38.397 ], [ -67.23744, -38.38513 ], [ -67.1868, -38.37332 ], [ -67.14228, -38.36294 ], [ -67.13843, -38.34542 ], [ -67.1085, -38.33959 ], [ -67.05744, -38.32964 ], [ -67.00686, -38.31978 ], [ -66.95606, -38.30989 ], [ -66.90403, -38.29972 ], [ -66.82734, -38.2847 ], [ -66.77735, -38.27483 ], [ -66.72659, -38.26481 ], [ -66.67628, -38.25483 ], [ -66.62504, -38.24466 ], [ -66.57412, -38.23454 ], [ -66.52382, -38.22454 ], [ -66.47202, -38.21425 ], [ -66.39435, -38.19854 ], [ -66.31729, -38.18303 ], [ -66.24042, -38.16752 ], [ -66.19033, -38.15733 ], [ -66.11262, -38.14151 ], [ -66.05622, -38.13003 ], [ -65.9902, -38.15264 ], [ -65.94613, -38.16772 ], [ -65.88965, -38.16012 ], [ -65.83844, -38.15319 ], [ -65.82328, -38.15114 ], [ -65.822722433373201, -38.150897774537441 ] ] } },
									{ "type": "Feature", "properties": { "Name": "5ECORDI1", "description": "LINEA = 5ECORDI1<br>REGION = SUR<br>CAMMESA = -<br>ET_ORIGEN = El Cortaderal<br>ET_DESTINO = Rio Diamante<br>TERNA = 1<br>KV = 500<br>ANO = 2011<br>LONGITUD = 1<br>" }, "geometry": { "type": "LineString", "coordinates": [ [ -68.592035350810391, -34.550814069904433 ], [ -68.591301936051053, -34.551720964034821 ], [ -68.586417580361314, -34.601961982868403 ], [ -68.541578181208038, -34.66622505586394 ], [ -68.437336220072197, -34.718516723310479 ], [ -68.370611796393675, -34.791250624467878 ], [ -68.295321071493731, -34.83235531048615 ], [ -68.263073681213356, -34.952590063448 ], [ -68.189852039920211, -35.127655713060712 ], [ -68.172230847289654, -35.16555136437016 ], [ -68.143986063235957, -35.2365181598391 ], [ -68.077487104206071, -35.393775083009587 ], [ -68.032406702868187, -35.573675593630227 ], [ -68.077037692302767, -35.817360089691533 ], [ -68.195089724133581, -36.178689925397009 ], [ -68.44208271529908, -36.615355170828309 ], [ -68.446487720052986, -36.66977608359386 ] ] } },
									{ "type": "Feature", "properties": { "Name": "5CLGBR1", "description": "LINEA = 5CLGBR1<br>REGION = SUR<br>CAMMESA = -<br>ET_ORIGEN = Choele Choel<br>ET_DESTINO = G. Brown<br>TERNA = 2<br>KV = 500<br>ANO = 1999<br>LONGITUD = 324,3<br>SECCION = 396,56<br>CONDUCTOR = P.RIVER M<br>MATERIAL = Al\/Ac<br>NRO_X = 4<br>HILO = 73,91<br>MAT_HILO = Acero<br>RESIST = 200<br>POT_NAT = 1110,77<br>IMPEDANCIA = 225,1<br>CTE_ATENUA = 4,47E-05<br>CTE_FASE = 1,07E-03<br>VEL_PROPAG = 293500<br>" }, "geometry": { "type": "LineString", "coordinates": [ [ -65.689903464698475, -39.567834331371728 ], [ -65.68862, -39.56772 ], [ -65.68487, -39.56739 ], [ -65.66783, -39.56591 ], [ -65.61568, -39.56136 ], [ -65.61342, -39.55798 ], [ -65.57408, -39.49898 ], [ -65.56877, -39.49101 ], [ -65.53781, -39.4732 ], [ -65.53279, -39.47147 ], [ -65.50893, -39.46327 ], [ -65.48159, -39.45387 ], [ -65.42551, -39.43455 ], [ -65.37033, -39.41551 ], [ -65.28985, -39.38766 ], [ -65.20524, -39.35831 ], [ -65.12093, -39.32897 ], [ -65.0087, -39.28979 ], [ -64.98046, -39.27991 ], [ -64.92434, -39.26024 ], [ -64.86821, -39.24053 ], [ -64.83979, -39.23054 ], [ -64.78411, -39.21093 ], [ -64.72798, -39.19112 ], [ -64.67197, -39.17132 ], [ -64.62005, -39.15293 ], [ -64.5648, -39.13333 ], [ -64.50866, -39.11337 ], [ -64.42199, -39.08249 ], [ -64.40859, -39.06943 ], [ -64.39105, -39.05234 ], [ -64.37357, -39.03528 ], [ -64.33601, -38.9986 ], [ -64.29903, -38.96244 ], [ -64.26179, -38.92538 ], [ -64.22524, -38.88808 ], [ -64.18762, -38.84962 ], [ -64.15095, -38.81209 ], [ -64.12318, -38.80888 ], [ -64.0921, -38.80527 ], [ -64.06117, -38.80167 ], [ -64.03038, -38.79808 ], [ -63.99944, -38.79446 ], [ -63.93728, -38.78716 ], [ -63.87586, -38.77992 ], [ -63.81482, -38.77269 ], [ -63.75525, -38.7656 ], [ -63.69579, -38.75849 ], [ -63.63359, -38.75139 ], [ -63.54246, -38.74091 ], [ -63.48575, -38.73436 ], [ -63.45587, -38.7309 ], [ -63.39456, -38.72376 ], [ -63.33612, -38.71708 ], [ -63.27596, -38.71048 ], [ -63.21573, -38.70383 ], [ -63.15915, -38.69756 ], [ -63.09836, -38.69079 ], [ -63.09239, -38.69012 ], [ -63.03742, -38.68397 ], [ -63.02605, -38.68269 ], [ -63.01113, -38.67595 ], [ -62.95838, -38.6521 ], [ -62.90538, -38.6281 ], [ -62.86561, -38.61006 ], [ -62.8557, -38.61005 ], [ -62.82545, -38.61001 ], [ -62.76488, -38.6099 ], [ -62.70534, -38.60977 ], [ -62.64661, -38.6096 ], [ -62.58671, -38.60941 ], [ -62.52581, -38.60918 ], [ -62.47032, -38.60894 ], [ -62.422394281548449, -38.608637349151813 ], [ -62.423571333654898, -38.644996191422372 ], [ -62.421380367113763, -38.665364042631488 ], [ -62.424323752990233, -38.678322779722492 ], [ -62.416869110104713, -38.684244177890207 ] ] } },
									{ "type": "Feature", "properties": { "Name": "5CLPG1", "description": "LINEA = 5CLPG1<br>REGION = SUR<br>CAMMESA = -<br>ET_ORIGEN = P. del Aguila<br>ET_DESTINO = Choele Choel<br>TERNA = 1<br>KV = 500<br>ANO = 1999<br>LONGITUD = 386,3<br>SECCION = 396,56<br>CONDUCTOR = P.RIVER M<br>MATERIAL = Al\/Ac<br>NRO_X = 4<br>HILO = 73,91<br>MAT_HILO = Acero<br>RESIST = 200<br>POT_NAT = 1110,77<br>IMPEDANCIA = 225,1<br>CTE_ATENUA = 4,47E-05<br>CTE_FASE = 1,07E-03<br>VEL_PROPAG = 293500<br>" }, "geometry": { "type": "LineString", "coordinates": [ [ -70.044093935346439, -40.16221063007437 ], [ -70.044032008049456, -40.161237798770898 ], [ -70.03646, -40.14714 ], [ -70.02437, -40.12742 ], [ -70.01287, -40.10858 ], [ -70.00437, -40.09463 ], [ -70.00035, -40.09326 ], [ -69.97296, -40.08391 ], [ -69.94548, -40.07451 ], [ -69.93022, -40.06929 ], [ -69.92074, -40.06574 ], [ -69.89417, -40.05515 ], [ -69.8668, -40.04424 ], [ -69.84151, -40.03415 ], [ -69.81591, -40.02392 ], [ -69.78989, -40.01352 ], [ -69.76307, -40.00279 ], [ -69.73572, -39.99184 ], [ -69.70799, -39.98072 ], [ -69.68065, -39.96975 ], [ -69.65456, -39.95927 ], [ -69.62916, -39.94906 ], [ -69.60362, -39.93879 ], [ -69.57576, -39.92757 ], [ -69.54893, -39.91675 ], [ -69.52342, -39.90647 ], [ -69.49822, -39.89629 ], [ -69.46926, -39.88459 ], [ -69.4461, -39.88027 ], [ -69.41801, -39.87501 ], [ -69.3876, -39.86932 ], [ -69.35861, -39.86388 ], [ -69.32847, -39.85822 ], [ -69.29842, -39.85256 ], [ -69.27012, -39.84723 ], [ -69.24359, -39.84222 ], [ -69.21701, -39.84186 ], [ -69.18927, -39.84148 ], [ -69.15981, -39.84107 ], [ -69.13, -39.84064 ], [ -69.10186, -39.84023 ], [ -69.07186, -39.83979 ], [ -69.04165, -39.83934 ], [ -69.01153, -39.83887 ], [ -68.9826, -39.83842 ], [ -68.95158, -39.83793 ], [ -68.92139, -39.83745 ], [ -68.8914, -39.83696 ], [ -68.86269, -39.83648 ], [ -68.83291, -39.83598 ], [ -68.80156, -39.83544 ], [ -68.77033, -39.8349 ], [ -68.73912, -39.83435 ], [ -68.70908, -39.83381 ], [ -68.67767, -39.83324 ], [ -68.6506, -39.83297 ], [ -68.62891, -39.83291 ], [ -68.60163, -39.83282 ], [ -68.57187, -39.83271 ], [ -68.54054, -39.8326 ], [ -68.50958, -39.83247 ], [ -68.48299, -39.83236 ], [ -68.45719, -39.83224 ], [ -68.42943, -39.83211 ], [ -68.39782, -39.83195 ], [ -68.36697, -39.83179 ], [ -68.33751, -39.83162 ], [ -68.30599, -39.83144 ], [ -68.27491, -39.83125 ], [ -68.24772, -39.83108 ], [ -68.23679, -39.83101 ], [ -68.21953, -39.83043 ], [ -68.18919, -39.82941 ], [ -68.15843, -39.82836 ], [ -68.1281, -39.82732 ], [ -68.10017, -39.82635 ], [ -68.072, -39.82537 ], [ -68.04225, -39.82433 ], [ -68.01136, -39.82324 ], [ -67.98045, -39.82214 ], [ -67.94883, -39.82101 ], [ -67.91779, -39.81988 ], [ -67.88795, -39.8188 ], [ -67.85767, -39.81769 ], [ -67.82877, -39.81662 ], [ -67.79757, -39.81546 ], [ -67.77007, -39.81443 ], [ -67.74155, -39.81336 ], [ -67.7129, -39.81227 ], [ -67.68321, -39.81114 ], [ -67.65264, -39.80996 ], [ -67.62149, -39.80876 ], [ -67.59095, -39.80757 ], [ -67.56161, -39.80642 ], [ -67.53251, -39.80527 ], [ -67.50201, -39.80406 ], [ -67.47324, -39.80299 ], [ -67.44417, -39.80224 ], [ -67.41331, -39.80143 ], [ -67.38193, -39.80061 ], [ -67.35189, -39.79981 ], [ -67.32047, -39.79897 ], [ -67.29024, -39.79815 ], [ -67.26039, -39.79733 ], [ -67.22984, -39.79649 ], [ -67.19918, -39.79564 ], [ -67.16856, -39.79477 ], [ -67.13959, -39.79395 ], [ -67.10942, -39.79309 ], [ -67.08037, -39.79225 ], [ -67.04999, -39.79136 ], [ -67.01863, -39.79044 ], [ -66.98953, -39.78958 ], [ -66.95901, -39.78866 ], [ -66.92845, -39.78774 ], [ -66.90041, -39.78688 ], [ -66.87103, -39.78598 ], [ -66.84193, -39.78508 ], [ -66.81053, -39.7841 ], [ -66.78066, -39.78316 ], [ -66.74948, -39.78217 ], [ -66.71999, -39.78123 ], [ -66.69388, -39.77458 ], [ -66.66683, -39.76768 ], [ -66.65041, -39.76381 ], [ -66.63911, -39.76156 ], [ -66.60971, -39.75568 ], [ -66.57929, -39.74958 ], [ -66.5488, -39.74347 ], [ -66.51834, -39.73735 ], [ -66.48792, -39.73123 ], [ -66.45721, -39.72504 ], [ -66.4268, -39.7189 ], [ -66.39636, -39.71275 ], [ -66.36608, -39.70662 ], [ -66.33751, -39.70083 ], [ -66.30672, -39.69458 ], [ -66.2769, -39.68852 ], [ -66.2471, -39.68245 ], [ -66.21695, -39.67631 ], [ -66.18708, -39.67021 ], [ -66.15726, -39.66411 ], [ -66.12688, -39.65789 ], [ -66.09699, -39.65176 ], [ -66.06728, -39.64566 ], [ -66.0374, -39.63952 ], [ -66.00701, -39.63326 ], [ -65.97737, -39.62715 ], [ -65.94969, -39.62143 ], [ -65.92085, -39.61547 ], [ -65.8908, -39.6094 ], [ -65.86154, -39.60358 ], [ -65.83178, -39.59766 ], [ -65.80179, -39.59168 ], [ -65.77225, -39.58535 ], [ -65.74222, -39.57881 ], [ -65.71248, -39.57232 ], [ -65.6954, -39.56859 ], [ -65.693986130866136, -39.568602379684641 ] ] } },
									{ "type": "Feature", "properties": { "Name": "5CLPY1", "description": "LINEA = 5CLPY1<br>REGION = SUR<br>CAMMESA = -<br>ET_ORIGEN = Choele Choel<br>ET_DESTINO = Puerto Madryn<br>TERNA = 0<br>KV = 500<br>ANO = 2007<br>LONGITUD = 355,3 km<br>" }, "geometry": { "type": "LineString", "coordinates": [ [ -65.689850029437451, -39.568787015326222 ], [ -65.688719710485628, -39.56872624549009 ], [ -65.686427378434715, -39.571043424734427 ], [ -65.702816404387619, -39.692884760275319 ], [ -65.674941929534512, -40.106047501291933 ], [ -65.669351562547234, -40.136670035307468 ], [ -65.654639983395128, -40.198686820105188 ], [ -65.487735487050145, -40.822454186169132 ], [ -65.48580578652107, -40.83134239598747 ], [ -65.4847372906695, -41.079001635232743 ], [ -65.46451337295332, -41.458056714574482 ], [ -65.4504146811786, -41.636309024714443 ], [ -65.43558961566103, -41.920599429572142 ], [ -65.125863766367956, -42.616356232644272 ], [ -65.104761327080595, -42.702558013600601 ], [ -65.105263963676649, -42.70445363972717 ] ] } },
									{ "type": "Feature", "properties": { "Name": "5COPG1", "description": "LINEA = 5COPG1<br>REGION = SUR<br>CAMMESA = 51<br>ET_ORIGEN = P. del Aguila<br>ET_DESTINO = Chocon<br>TERNA = 1<br>KV = 500<br>ANO = 1984<br>LONGITUD = 164,1<br>SECCION = 317,1<br>CONDUCTOR = P.RIVER<br>MATERIAL = Al\/Ac<br>NRO_X = 4<br>HILO = 73,91<br>MAT_HILO = Acero<br>RESIST = 100<br>POT_NAT = 965,62<br>IMPEDANCIA = 258,9<br>CTE_ATENUA = 4,52E-05<br>CTE_FASE = 1,08E-03<br>VEL_PROPAG = 290700<br>" }, "geometry": { "type": "LineString", "coordinates": [ [ -70.044933606950266, -40.162219044062233 ], [ -70.044898777068369, -40.160423569070858 ], [ -70.04383, -40.15419 ], [ -70.038446619247665, -40.14249959148858 ], [ -70.034367350684875, -40.133520767408008 ], [ -70.03414, -40.11731 ], [ -70.0335, -40.09536 ], [ -70.03293, -40.07599 ], [ -70.0317, -40.034 ], [ -70.03045, -39.99127 ], [ -70.02987, -39.97157 ], [ -70.02935, -39.95406 ], [ -70.02842, -39.92219 ], [ -70.01626, -39.91456 ], [ -69.99406, -39.90064 ], [ -69.95055, -39.87335 ], [ -69.90845, -39.84695 ], [ -69.88833, -39.83433 ], [ -69.84406, -39.80657 ], [ -69.79759, -39.77742 ], [ -69.75206, -39.74887 ], [ -69.73942, -39.74094 ], [ -69.72798, -39.7411 ], [ -69.66786, -39.74197 ], [ -69.62681, -39.74256 ], [ -69.61087, -39.73701 ], [ -69.55593, -39.71789 ], [ -69.52793, -39.70814 ], [ -69.50146, -39.69893 ], [ -69.49672, -39.69728 ], [ -69.46474, -39.66751 ], [ -69.445407077688444, -39.649759218284103 ], [ -69.426190362511448, -39.632103998213893 ], [ -69.387741028460951, -39.596445340806717 ], [ -69.369033964246142, -39.578768309659637 ], [ -69.35001, -39.56072 ], [ -69.33214, -39.54409 ], [ -69.32231, -39.53494 ], [ -69.318780139727664, -39.524871503866649 ], [ -69.31183, -39.51172 ], [ -69.29131, -39.47201 ], [ -69.275591511172607, -39.442039133766407 ], [ -69.26631, -39.43824 ], [ -69.21467, -39.41713 ], [ -69.2036, -39.41261 ], [ -69.197495016322236, -39.410207069740693 ], [ -69.1902, -39.40812 ], [ -69.174916711459474, -39.40395910570053 ], [ -69.169953333275231, -39.401956407847862 ], [ -69.147693946442629, -39.389751448839512 ], [ -69.14284, -39.38765 ], [ -69.11829, -39.37761 ], [ -69.06965, -39.35771 ], [ -69.024810305213464, -39.339405351597676 ], [ -69.001068784707414, -39.329642047340407 ], [ -68.97777, -39.31941 ], [ -68.96389, -39.31331 ], [ -68.93265, -39.3015 ], [ -68.90695, -39.29179 ], [ -68.8602, -39.27412 ], [ -68.85628, -39.27264 ], [ -68.84232, -39.25933 ], [ -68.82475, -39.24258 ], [ -68.796973342195329, -39.240766306258813 ], [ -68.781852850223856, -39.239501073988592 ], [ -68.780464100564757, -39.238261308004247 ] ] } },
									{ "type": "Feature", "properties": { "Name": "5COPG2", "description": "LINEA = 5COPG2<br>REGION = SUR<br>CAMMESA = 52<br>ET_ORIGEN = P. del Aguila<br>ET_DESTINO = Chocon<br>TERNA = 2<br>KV = 500<br>ANO = 1984<br>LONGITUD = 164,5<br>SECCION = 317,1<br>CONDUCTOR = P.RIVER<br>MATERIAL = Al\/Ac<br>NRO_X = 4<br>HILO = 73,91<br>MAT_HILO = Acero<br>RESIST = 100<br>POT_NAT = 965,62<br>IMPEDANCIA = 258,9<br>CTE_ATENUA = 4,52E-05<br>CTE_FASE = 1,08E-03<br>VEL_PROPAG = 290700<br>" }, "geometry": { "type": "LineString", "coordinates": [ [ -70.045418827422552, -40.162226600643393 ], [ -70.04542245614833, -40.160754774609323 ], [ -70.04492, -40.15458 ], [ -70.03911, -40.14207 ], [ -70.03503, -40.13353 ], [ -70.03473, -40.12066 ], [ -70.03367, -40.07617 ], [ -70.03312, -40.05288 ], [ -70.03262, -40.03173 ], [ -70.03154, -39.98629 ], [ -70.03058, -39.94594 ], [ -70.03009, -39.9253 ], [ -70.03004, -39.92229 ], [ -69.99183, -39.89837 ], [ -69.97008, -39.88474 ], [ -69.94783, -39.87079 ], [ -69.90321, -39.84282 ], [ -69.88269, -39.82996 ], [ -69.84233, -39.80466 ], [ -69.82112, -39.79137 ], [ -69.7742, -39.76195 ], [ -69.73953, -39.74022 ], [ -69.72824, -39.74039 ], [ -69.66831, -39.74126 ], [ -69.62689, -39.74186 ], [ -69.61207, -39.73671 ], [ -69.56185, -39.71923 ], [ -69.53712, -39.71063 ], [ -69.49731, -39.69678 ], [ -69.49034, -39.6903 ], [ -69.4718, -39.67304 ], [ -69.43409, -39.63794 ], [ -69.39712, -39.60354 ], [ -69.35925, -39.5683 ], [ -69.3555, -39.56481 ], [ -69.34847, -39.53839 ], [ -69.34756, -39.52139 ], [ -69.33843, -39.51114 ], [ -69.30628, -39.47503 ], [ -69.276313016040817, -39.441581880112061 ], [ -69.27213, -39.4398 ], [ -69.24641, -39.42925 ], [ -69.199870506071804, -39.410206260206401 ], [ -69.195913026963154, -39.40912117225389 ], [ -69.175276673218065, -39.40328171895154 ], [ -69.170473150352095, -39.401365367199077 ], [ -69.14859, -39.3896 ], [ -69.14464, -39.3875 ], [ -69.12365, -39.3788 ], [ -69.07129, -39.35708 ], [ -69.0454, -39.34635 ], [ -69.02109, -39.33627 ], [ -68.99743, -39.32645 ], [ -68.97683, -39.31731 ], [ -68.95256, -39.30822 ], [ -68.90384, -39.28986 ], [ -68.88062, -39.2811 ], [ -68.856885512530155, -39.272098876709592 ], [ -68.82508, -39.24197 ], [ -68.781991776580753, -39.239064922735857 ], [ -68.780771951620139, -39.238042990969952 ] ] } },
									{ "type": "Feature", "properties": { "Name": "5HEPU1", "description": "LINEA = 5HEPU1<br>REGION = SUR<br>CAMMESA = 60<br>ET_ORIGEN = Puelches<br>ET_DESTINO = Henderson<br>TERNA = 1<br>KV = 500<br>ANO = 1974<br>LONGITUD = 419,9<br>SECCION = 282,6<br>CONDUCTOR = DOVE<br>MATERIAL = Al\/Ac<br>NRO_X = 4<br>HILO = 72,23<br>MAT_HILO = Acero<br>RESIST = 100<br>POT_NAT = 963,39<br>IMPEDANCIA = 259,5<br>CTE_ATENUA = 5,00E-05<br>CTE_FASE = 1,08E-03<br>VEL_PROPAG = 291900<br>" }, "geometry": { "type": "LineString", "coordinates": [ [ -65.822733494094877, -38.14897743518776 ], [ -65.82217, -38.14881 ], [ -65.80786, -38.14458 ], [ -65.80339, -38.1427 ], [ -65.78037, -38.13301 ], [ -65.73243, -38.11283 ], [ -65.68567, -38.09314 ], [ -65.66251, -38.08318 ], [ -65.61708, -38.06388 ], [ -65.57289, -38.04477 ], [ -65.55058, -38.03508 ], [ -65.50589, -38.01557 ], [ -65.46081, -37.99589 ], [ -65.41461, -37.97569 ], [ -65.3685, -37.95553 ], [ -65.32246, -37.93539 ], [ -65.29882, -37.92505 ], [ -65.29433, -37.92309 ], [ -65.27508, -37.91467 ], [ -65.22948, -37.89455 ], [ -65.18442, -37.87467 ], [ -65.16174, -37.86466 ], [ -65.13931, -37.85476 ], [ -65.0936, -37.83458 ], [ -65.04834, -37.81445 ], [ -64.98037, -37.78416 ], [ -64.9347, -37.7638 ], [ -64.91192, -37.75364 ], [ -64.88865, -37.74328 ], [ -64.88411, -37.74126 ], [ -64.84269, -37.72283 ], [ -64.79685, -37.70237 ], [ -64.7737, -37.692 ], [ -64.72878, -37.67189 ], [ -64.68251, -37.65105 ], [ -64.67795, -37.64899 ], [ -64.66001, -37.64091 ], [ -64.61446, -37.62044 ], [ -64.568387363595136, -37.599799920957231 ], [ -64.52405, -37.57987 ], [ -64.47881, -37.55947 ], [ -64.43366, -37.53911 ], [ -64.38726, -37.51816 ], [ -64.36719, -37.50917 ], [ -64.32293, -37.49213 ], [ -64.30054, -37.48351 ], [ -64.23206, -37.45725 ], [ -64.1873, -37.44 ], [ -64.14241, -37.42267 ], [ -64.07381, -37.39665 ], [ -64.05096, -37.38808 ], [ -64.02924, -37.37966 ], [ -64.02471, -37.37787 ], [ -63.98427, -37.36204 ], [ -63.97984, -37.36033 ], [ -63.9403, -37.34496 ], [ -63.89411, -37.32698 ], [ -63.84938, -37.30958 ], [ -63.82692, -37.30082 ], [ -63.804296010284993, -37.291865833571457 ], [ -63.759672485788307, -37.274420070460494 ], [ -63.73626, -37.26536 ], [ -63.72858, -37.26236 ], [ -63.718937648228533, -37.254166499975952 ], [ -63.701819033197637, -37.240094532608303 ], [ -63.683913299368399, -37.225279003702568 ], [ -63.666667798258537, -37.211061259826458 ], [ -63.652270528562539, -37.199216980472251 ], [ -63.64763, -37.19705 ], [ -63.626779250929467, -37.186339107625763 ], [ -63.604960011751118, -37.175440655021809 ], [ -63.56288710286077, -37.15414908673484 ] ] } },
									{ "type": "Feature", "properties": { "Name": "5MCPU2", "description": "LINEA = 5MCPU2<br>REGION = SUR<br>CAMMESA = -<br>ET_ORIGEN = Puelches<br>ET_DESTINO = Macachin<br>TERNA = 2<br>KV = 500<br>ANO = 1976<br>LONGITUD = 228,6<br>SECCION = 282,6<br>CONDUCTOR = DOVE<br>MATERIAL = Al\/Ac<br>NRO_X = 4<br>HILO = 72,23<br>MAT_HILO = Acero<br>RESIST = 100<br>POT_NAT = 963,39<br>IMPEDANCIA = 259,5<br>CTE_ATENUA = 5,00E-05<br>CTE_FASE = 1,08E-03<br>VEL_PROPAG = 291900<br>" }, "geometry": { "type": "LineString", "coordinates": [ [ -65.822913242694611, -38.148447176818571 ], [ -65.82247, -38.14831 ], [ -65.80833, -38.144 ], [ -65.80367, -38.14204 ], [ -65.77968, -38.13192 ], [ -65.73641, -38.11368 ], [ -65.73206, -38.11184 ], [ -65.68611, -38.09247 ], [ -65.64053, -38.07308 ], [ -65.59581, -38.05391 ], [ -65.55028, -38.03411 ], [ -65.4812, -38.004 ], [ -65.45786, -37.99383 ], [ -65.43522, -37.98395 ], [ -65.3896, -37.96404 ], [ -65.36622, -37.95383 ], [ -65.32102, -37.93406 ], [ -65.27558, -37.91419 ], [ -65.22979, -37.89398 ], [ -65.16206, -37.86406 ], [ -65.11615, -37.84375 ], [ -65.07077, -37.82365 ], [ -65.03016, -37.80563 ], [ -65.02567, -37.80364 ], [ -64.97952, -37.7831 ], [ -64.93296, -37.76233 ], [ -64.88696, -37.74183 ], [ -64.84101, -37.72137 ], [ -64.79541, -37.70099 ], [ -64.75014, -37.68068 ], [ -64.68138, -37.64977 ], [ -64.63641, -37.62952 ], [ -64.59171, -37.60945 ], [ -64.52355, -37.57883 ], [ -64.50136, -37.56884 ], [ -64.45585, -37.54835 ], [ -64.45156, -37.54642 ], [ -64.38753, -37.5175 ], [ -64.37092, -37.51 ], [ -64.36761, -37.50847 ], [ -64.34573, -37.50008 ], [ -64.3237, -37.49163 ], [ -64.27838, -37.47425 ], [ -64.23249, -37.45662 ], [ -64.20998, -37.44797 ], [ -64.16525, -37.43076 ], [ -64.12022, -37.41344 ], [ -64.09724, -37.40467 ], [ -64.05121, -37.3874 ], [ -64.04297, -37.38431 ], [ -64.00733, -37.37022 ], [ -63.96254, -37.35283 ], [ -63.89476, -37.32641 ], [ -63.84933, -37.30868 ], [ -63.80493193458436, -37.29138007164967 ], [ -63.73707, -37.26492 ], [ -63.72911, -37.26181 ], [ -63.719235340336908, -37.253450942834753 ], [ -63.701942200845117, -37.239226725317288 ], [ -63.65285973591277, -37.198702532110147 ], [ -63.5837713758619, -37.1638616912374 ], [ -63.563381824049912, -37.153564855932487 ], [ -63.563886112476823, -37.153166810452042 ] ] } },
									{ "type": "Feature", "properties": { "Name": "5PAPG1", "description": "LINEA = 5PAPG1<br>REGION = SUR<br>CAMMESA = 49<br>ET_ORIGEN = C.H.P.Aguila<br>ET_DESTINO = P.Aguila<br>TERNA = 1<br>KV = 500<br>ANO = 1993<br>LONGITUD = 4,9<br>SECCION = 317,1<br>CONDUCTOR = P.RIVER<br>MATERIAL = Al\/Ac<br>NRO_X = 4<br>HILO = 73,91<br>MAT_HILO = Acero<br>RESIST = 100<br>POT_NAT = 965,62<br>IMPEDANCIA = 258,9<br>CTE_ATENUA = 4,52E-05<br>CTE_FASE = 1,08E-03<br>VEL_PROPAG = 290700<br>" }, "geometry": { "type": "LineString", "coordinates": [ [ -69.991475782536668, -40.189707015992482 ], [ -69.996122966337154, -40.187225048249637 ], [ -70.03194, -40.17417 ], [ -70.044191762122551, -40.164497968931059 ], [ -70.044201327299447, -40.163777622586942 ] ] } },
									{ "type": "Feature", "properties": { "Name": "5PAPG2", "description": "LINEA = 5PAPG2<br>REGION = SUR<br>CAMMESA = 50<br>ET_ORIGEN = C.H.P.Aguila<br>ET_DESTINO = P.Aguila<br>TERNA = 2<br>KV = 500<br>ANO = 1994<br>LONGITUD = 5,0<br>SECCION = 317,1<br>CONDUCTOR = P.RIVER<br>MATERIAL = Al\/Ac<br>NRO_X = 4<br>HILO = 73,91<br>MAT_HILO = Acero<br>RESIST = 100<br>POT_NAT = 965,62<br>IMPEDANCIA = 258,9<br>CTE_ATENUA = 4,52E-05<br>CTE_FASE = 1,08E-03<br>VEL_PROPAG = 290700<br>" }, "geometry": { "type": "LineString", "coordinates": [ [ -69.992528111007857, -40.189834433543062 ], [ -69.996547650214723, -40.187885817504991 ], [ -70.032453441297676, -40.174857213452178 ], [ -70.044588642122363, -40.164999609816178 ], [ -70.044605308231993, -40.163755951046902 ] ] } },
									{ "type": "Feature", "properties": { "Name": "5PYZN1", "description": "LINEA = 5PYZN1<br>REGION = SUR<br>CAMMESA = -<br>ET_ORIGEN = Puerto Madryn<br>ET_DESTINO = Sta Cruz Norte<br>TERNA = 0<br>KV = 500<br>ANO = 2008<br>LONGITUD = 552,6 km<br>" }, "geometry": { "type": "LineString", "coordinates": [ [ -65.106065488922766, -42.706229800860868 ], [ -65.106190211982806, -42.706652534327127 ], [ -65.110466217836262, -42.707777022534877 ], [ -65.168023793493248, -42.722893925702472 ], [ -65.227347487532612, -42.738436948904052 ], [ -65.28067880476344, -42.752377271600601 ], [ -65.283683311190771, -42.75473054245041 ], [ -65.303841974299971, -42.770513175623591 ], [ -65.347576535534898, -42.804714502606821 ], [ -65.391409608565311, -42.838938837235403 ], [ -65.435358252647731, -42.873199151258142 ], [ -65.479616227684431, -42.907645751205692 ], [ -65.546040835628332, -42.959241754742337 ], [ -65.590110029216902, -42.993404682536273 ], [ -65.634109819230417, -43.027459532687672 ], [ -65.678445638014864, -43.061719656831052 ], [ -65.722695422206229, -43.095858496155472 ], [ -65.76660466489767, -43.129680538376512 ], [ -65.8106725383807, -43.163570668233817 ], [ -65.845605576366239, -43.190397231150612 ], [ -65.864167912208146, -43.217338997748037 ], [ -65.892224903540395, -43.258011179022184 ], [ -65.921374409711319, -43.30020298946733 ], [ -65.950675209622744, -43.342548005387982 ], [ -65.97455262376188, -43.377006510770883 ], [ -65.977058803649484, -43.380620749068527 ], [ -65.979494556264754, -43.384132960565672 ], [ -65.962616352720659, -43.419685346089132 ], [ -65.949279181915571, -43.447747109889782 ], [ -65.920238932702048, -43.471367557431307 ], [ -65.91661721344191, -43.474311526307048 ], [ -65.918921242127524, -43.49078691536883 ], [ -65.924701582070512, -43.532082464388111 ], [ -65.930632595964838, -43.574398209496572 ], [ -65.933085099731102, -43.591879342224502 ], [ -65.939176253711878, -43.614976418877333 ], [ -65.956296852131047, -43.679801746166802 ], [ -65.957549509281677, -43.68453933818958 ], [ -65.963705751123598, -43.707811638338818 ], [ -65.976069687288174, -43.754496468858243 ], [ -65.993340839187212, -43.819589185407438 ], [ -65.994566337151596, -43.824202563451337 ], [ -66.019122214543259, -43.916493341652121 ], [ -66.037629821971819, -43.985864138227903 ], [ -66.054987454726842, -44.05077781393797 ], [ -66.056215188496168, -44.055363890847097 ], [ -66.068614114665877, -44.101639085086667 ], [ -66.088341611747893, -44.175116926781932 ], [ -66.125058155582849, -44.205953228581507 ], [ -66.168081090139367, -44.242030122443389 ], [ -66.229108666843885, -44.293101625867052 ], [ -66.272283309745717, -44.329159716850803 ], [ -66.335506330870757, -44.381852558757913 ], [ -66.378630970961837, -44.41772029641777 ], [ -66.420560351420349, -44.452536261135833 ], [ -66.483926207543078, -44.505044238596561 ], [ -66.527183066471423, -44.540814576866801 ], [ -66.548369914555522, -44.558312600366257 ], [ -66.569594196410293, -44.575827054001003 ], [ -66.611717788189551, -44.610544880437942 ], [ -66.653759348601085, -44.645138248740153 ], [ -66.716799539168548, -44.696903786531998 ], [ -66.781436795935633, -44.749848541723082 ], [ -66.824145453407681, -44.784758115627383 ], [ -66.845095315985247, -44.801860987637241 ], [ -66.886707763885468, -44.835790649441513 ], [ -66.946988902474175, -44.884844316337983 ], [ -66.985734423354188, -44.916312312635164 ], [ -67.030084754107236, -44.952273762636153 ], [ -67.072884839954241, -44.986918942694729 ], [ -67.111671409180886, -45.017810374901927 ], [ -67.152497312201916, -45.04681214005231 ], [ -67.174137232017458, -45.062166712733841 ], [ -67.218368198207727, -45.093512140356751 ], [ -67.288270102492859, -45.1429444036402 ], [ -67.355418739781541, -45.190899460370808 ], [ -67.397418040611328, -45.223249074583343 ], [ -67.4168329946516, -45.238185503449181 ], [ -67.457767280138924, -45.269640512987543 ], [ -67.500685940126175, -45.302566808644059 ], [ -67.545729291354476, -45.337064225807062 ], [ -67.590048352652445, -45.370948129190083 ], [ -67.636214426211751, -45.406182212838821 ], [ -67.702740753454904, -45.456844295679822 ], [ -67.746960879000895, -45.490447033714823 ], [ -67.795002339281297, -45.526888156027347 ], [ -67.839654830426525, -45.560697600205231 ], [ -67.881514477513065, -45.592937859432489 ], [ -67.945099380418398, -45.639533743552903 ], [ -68.008189521883622, -45.686327635578643 ], [ -68.012565133993064, -45.689568780436929 ], [ -68.049385598278661, -45.720440887012437 ], [ -68.085457194028734, -45.751393931841527 ], [ -68.08549344006758, -45.754937461616358 ], [ -68.086441445891083, -45.797340579719339 ], [ -68.086343277027169, -45.83774093494231 ], [ -68.086790276308477, -45.881080719243599 ], [ -68.087150320539763, -45.915883640491437 ], [ -68.088089912487348, -45.953611739545657 ], [ -68.089584366221061, -45.957532505379248 ], [ -68.098920500651019, -45.982012827342757 ], [ -68.099945471623741, -45.984698997300043 ], [ -68.101767482644775, -45.989473303232209 ], [ -68.104090430222655, -46.000589892921937 ], [ -68.106356380434789, -46.022093333150089 ], [ -68.1109871219805, -46.065980020155308 ], [ -68.117848852359842, -46.130866980127358 ], [ -68.125145772614616, -46.199681943350008 ], [ -68.152008648558791, -46.240114565968177 ], [ -68.179852634843314, -46.281952924805132 ], [ -68.20517399659839, -46.319938147683509 ], [ -68.229194378424737, -46.355916663740658 ], [ -68.226672661903393, -46.359450784671822 ], [ -68.197868107966016, -46.39978393570069 ], [ -68.171278039787779, -46.436958072230887 ], [ -68.125730888009116, -46.500505414377322 ], [ -68.080832935122942, -46.560227705251641 ], [ -68.067368247529103, -46.579658995922323 ], [ -68.039839242511206, -46.619896829140202 ], [ -68.012104506475325, -46.65832496735797 ], [ -67.989805554982027, -46.689177756827753 ], [ -67.989139394011175, -46.69229228714994 ], [ -67.988282794355598, -46.696296676300868 ], [ -67.984044967266144, -46.71609906605201 ], [ -67.980175593965242, -46.737142632906973 ], [ -67.979974022424742, -46.75724896762901 ], [ -67.980111127284715, -46.771722234452803 ], [ -67.979948979525005, -46.77288282883157 ] ] } },
									{ "type": "Feature", "properties": { "Name": "5RSCZN1", "description": "LINEA = 5RSCZN1<br>REGION = SUR<br>ET_ORIGEN = RIO SANTA CRUZ<br>ET_DESTINO = SANTA CRUZ NORTE<br>TERNA = 1<br>KV = 500<br>ANO = 2014<br>LONGITUD = 394,0 km<br>" }, "geometry": { "type": "LineString", "coordinates": [ [ -67.979732208102931, -46.776217335003459 ], [ -67.97968014060892, -46.776671209991399 ], [ -67.982776160255057, -46.782019551441543 ], [ -68.014283335846642, -46.796405901766853 ], [ -68.008556172206326, -46.858769652402849 ], [ -67.525626190964047, -47.283834091333567 ], [ -67.624156250990978, -47.516887487788523 ], [ -67.642525566741426, -47.555408551209467 ], [ -67.752706438014641, -47.817210475481161 ], [ -67.765275561986286, -47.852898594221173 ], [ -67.86350632438797, -48.073496744072422 ], [ -68.074930240024131, -48.37319572620757 ], [ -68.160601627825329, -48.450588790489327 ], [ -68.218311860201666, -48.704834261495222 ], [ -68.501820772979229, -48.994550274422018 ], [ -68.644297073400566, -49.235489226044251 ], [ -68.642265081632914, -49.530996050445957 ], [ -68.920808822788018, -49.858566063505592 ], [ -68.971171708519691, -49.984279974940229 ], [ -68.97219364316733, -49.984961642216632 ] ] } }
								]
							}
						},
						"paint": {
							"line-color": "#0000ff",
							"line-width": 3
						}
					}
				)


			});

		}

	});

});