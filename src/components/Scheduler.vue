<template>
<div ref="container" class="widget-box dhx_cal_container" style='width:100%; height:100vh;'>
  <div class="dhx_cal_navline">
    <div class="dhx_cal_prev_button">&nbsp;</div>
    <div class="dhx_cal_next_button">&nbsp;</div>
    <div class="dhx_cal_today_button"></div>
    <div class="dhx_cal_date"></div>
    <div class="dhx_cal_tab" name="day_tab" style="right:204px"></div>
    <div class="dhx_cal_tab" name="week_tab" style="right:140px"></div>
    <div class="dhx_cal_tab" name="month_tab" style="right:76px"></div>
    </div>
  <div class="dhx_cal_header"></div>
  <div class="dhx_cal_data"></div>
</div>
</template>
<style>
    @import "dhtmlx-scheduler/codebase/dhtmlxscheduler_material.css";
    .widget-box{
      height:100%;
    }
</style>
<script>
  import 'dhtmlx-scheduler';
  export default {
    created:function(){
      console.log(scheduler)
    },
    mounted:function(){
      const data = [
        { "id": "2", "start_date": "2017-05-24 00:00:00", "end_date": "2017-06-08 00:00:00", "text": "French Open", "details": "Philippe-Chatrier Court\n Paris, FRA"},
        { "id": "3", "start_date": "2017-06-10 00:00:00", "end_date": "2017-06-13 00:00:00", "text": "Aegon Championship", "details": "The Queens Club\n London, ENG"},
        { "id": "4", "start_date": "2017-06-21 00:00:00", "end_date": "2017-07-05 00:00:00", "text": "Wimbledon", "details": "Wimbledon\n June 21, 2009 - July 5, 2009"},
        { "id": "5", "start_date": "2017-06-18 00:00:00", "end_date": "2017-06-27 00:00:00", "text": "Indianapolis Tennis Championship", "details": "Indianapolis Tennis Center\n Indianapolis, IN"},
        { "id": "8", "start_date": "2017-06-27 00:00:00", "end_date": "2017-06-02 00:00:00", "text": "Countrywide Classic Tennis", "details": "Los Angeles Tennis Center.\n Los Angeles, CA  "},
        { "id": "7", "start_date": "2017-06-11 00:00:00", "end_date": "2017-06-18 00:00:00", "text": "ATP Master Tennis", "details": "La Caja Magica.\n Madrid, Spain"}
      ];

      /* globals scheduler */
     // scheduler.config.xml_date="%Y-%m-%d %H:%i";
      scheduler.init(this.$refs.container, new Date(2017,5,1), "month");
      scheduler.parse(data, "json");
      scheduler.updateView();
    }
  }
</script>
