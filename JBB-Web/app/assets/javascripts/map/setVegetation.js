var vegetation_on = false;

function setVegetation() {
  if(vegetation_on) {
    administrateAreaEvolutionGardem.setMap(null);
    anthropicAreaEvolutionGardem.setMap(null);
    anthropicArea.setMap(null);
    anthropicAreaAdministrate.setMap(null);
    centerBypassAreaCenter.setMap(null);
    centerBypassAreaLeft.setMap(null);
    centerBypassAreaRight.setMap(null);
    centerBypassAreaUp.setMap(null);
    centerCerradoSparseAreaLeft.setMap(null);
    centerCerradoSparseAreaRightUp.setMap(null);
    centerCerradoSparseAreaRight.setMap(null);
    centerCerradoSparseArea.setMap(null);
    centerForestGaleriaArea.setMap(null);
    centerGalleryBush.setMap(null);
    centerGroundAreaRight.setMap(null);
    centerGroundMurundunsAreaCenter.setMap(null);
    centerGroundMurundunsAreaLeft.setMap(null);
    centerGroundMurundunsAreaRight.setMap(null);
    centerGroundMurundunsArea.setMap(null);
    centerThickArea.setMap(null);
    centerTypicalCerradoAreaUp.setMap(null);
    centerTypicalCerradoArea.setMap(null);
    cleanCamp.setMap(null);
    denseCerrado.setMap(null);
    dirtyFieldTypicalCerrado.setMap(null);
    drainCerradoSouth.setMap(null);
    dryForest.setMap(null);
    eucalyptusTypicalCerrado.setMap(null);
    nursery.setMap(null);

    pinusAdministrateArea.setMap(null);
    pinusEvolutionGardem.setMap(null);
    visitantsCenterAdministrativeAreaPolygon.setMap(null);
    urbanAreaPolygon.setMap(null);
    smallDenseCerrado.setMap(null);
    pinusUrbanArea.setMap(null);
    smallPinus.setMap(null);
    typicalCerradoDryForestPolygon.setMap(null);
    typicalCerradoCleanCampPolygon.setMap(null);
    southAnthropicArea.setMap(null);
    southBypassArea.setMap(null);
    southDirtyFieldArea.setMap(null);
    southDirtyField.setMap(null);
    southLeftBypassArea.setMap(null);
    southCenterBypassArea.setMap(null);
    southRupestresAreaTopPolygon.setMap(null);
    southCleanCamp.setMap(null);
    southPath.setMap(null);
    southEucalyptusOne.setMap(null);
    southEucalyptusTwo.setMap(null);
    southEucalyptusThree.setMap(null);
    southEucalyptusFour.setMap(null);
    southEucalyptusFive.setMap(null);
    southEucalyptusSix.setMap(null);
    southEucalyptusSeven.setMap(null);
    southEucalyptusEight.setMap(null);
    southEucalyptusNine.setMap(null);
    southEucalyptusTen.setMap(null);
    southEucalyptusEleven.setMap(null);
    southGalleryBush.setMap(null);
    southTypicalCerradoAreaPolygon.setMap(null);
    smallDrainCerrado.setMap(null);
    smallRockCerrado.setMap(null);
    smallTypicalCerradoArea.setMap(null);
    vegetation_on = false;
    infowindow.close();
  }
  else {
    addAdministrateAreaEvolutionGardem();
    addAnthropicAreaEvolutionGardem();
    addAnthropicArea();
    addAnthropicAreaAdministrate();
    addCenterBypassAreaCenter();
    addCenterBypassAreaLeft();
    addCenterBypassAreaRight();
    addCenterBypassAreaUp();
    addCenterCerradoSparseAreaLeft();
    addCenterCerradoSparseAreaRightUp();
    addCenterCerradoSparseAreaRight();
    addCenterCerradoSparseArea();
    addCenterForestGaleriaArea();
    addCenterGalleryBush();
    addCenterGroundAreaRight();
    addCenterGroundMurundunsAreaCenter();
    addCenterGroundMurundunsAreaLeft();
    addCenterGroundMurundunsAreaRight();
    addCenterGroundMurundunsArea();
    addCenterThickArea();
    addCenterTypicalCerradoAreaUp();
    addCenterTypicalCerradoArea();
    addCleanCamp();
    addDenseCerrado();
    addDirtyFieldTypicalCerrado();
    addDrainCerradoSouth();
    addDryForest();
    addEucalyptusTypicalCerrado();
    addNursery();
    addUrbanAreaPolygon();
    addVisitantsCenterAdministrativeAreaPolygon();
    addSmallDenseCerrado();
    addPinusEvolutionGardem();
    addPinusAdministrateArea();
    addPinusUrbanArea();
    addSmallPinus();
    addTypicalCerradoDryForestPolygon();
    addTypicalCerradoCleanCampPolygon();
    addSouthAnthropicArea();
    addSouthBypassArea();
    addSouthDirtyField();
    addSouthDirtyFieldArea();
    addSouthLeftBypassAreaPolygon();
    addSouthCenterBypassArea();
    addSouthRupestresAreaTopPolygon();
    addSouthEucalyptusOnePolygon();
    addSouthEucalyptusTwoPolygon();
    addSouthEucalyptusThreePolygon();
    addSouthEucalyptusFourPolygon();
    addSouthEucalyptusFivePolygon();
    addSouthEucalyptusSixPolygon();
    addSouthEucalyptusSevenPolygon();
    addSouthEucalyptusEight();
    addSouthEucalyptusNinePolygon();
    addSouthEucalyptusTenPolygon();
    addSouthEucalyptusElevenPolygon();
    addSouthCleanCamp();
    addSouthTypicalCerradoAreaPolygon();
    addSouthGalleryBushPolygon();
    addSouthPathPolygon();
    addSmallDrainCerrado();
    addSmallTypicalCerradoArea();
    addSmallRockCerrado();
    vegetation_on = true;
  }
}
