function initialize() {
    var myLatlng = new google.maps.LatLng(-6.202382, 106.801041);
    var mapOptions = {
        zoom: 15,
        center: myLatlng
    };
    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: 'Bayu Suwarning Hadi Was Here!'
    });
}

google.maps.event.addDomListener(window, 'load', initialize);
