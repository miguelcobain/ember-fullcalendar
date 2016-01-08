import Ember from 'ember';
const { Controller } = Ember;

export default Controller.extend({

  eventsArray: Ember.A([{
     //id: 1,
     title: 'Event 1',
     start: '2016-01-05T07:08:08',
     end: '2016-01-05T09:08:08'
   }, {
     //id: 2,
     title: 'Event 2',
     start: '2016-01-06T07:08:08',
     end: '2016-01-07T09:08:08'
   }, {
     //id: 3,
     title: 'Event 3',
     start: '2016-01-10T07:08:08',
     end: '2016-01-10T09:48:08'
   }, {
     //id: 4,
     title: 'Event 4',
     start: '2016-01-11T07:15:08',
     end: '2016-01-11T09:08:08'
   }]),

   viewName: 'agendaWeek',

   actions: {
     addEvent() {
       let eventTitle = this.get('eventTitle');
        this.get('eventsArray').insertAt(2, {
          title: eventTitle,
          start: '2016-01-11T07:15:08',
          end: '2016-01-11T09:08:08'
        });
     },

     removeEvent(e) {
       this.get('eventsArray').removeObject(e);
     },

     changeView(viewName) {
       this.set('viewName', viewName);
     }
   }

});
