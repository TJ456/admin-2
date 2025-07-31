import flatpickr from "flatpickr";


const originalUpdateRange = flatpickr.prototype._updateRangeDateFromInput;

flatpickr.prototype._updateRangeDateFromInput = function() {
  
  originalUpdateRange.call(this);
  
if (this.config.mode === 'range' && this.selectedDates.length === 2) {
   
    const allDays = this.days.childNodes;
    const endDate = this.selectedDates[1];
    
   
    interface FlatpickrDayElement extends HTMLElement {
      dateObj?: Date;
    }

    allDays.forEach((dayNode) => {
      const day = dayNode as FlatpickrDayElement;
      if (day.dateObj) {
        const date = new Date(day.dateObj);
        if (date.getTime() === endDate.getTime()) {
          day.classList.add('endRange');
          day.classList.add('selected');
          day.style.backgroundColor = 'var(--color-brand-500)';
          day.style.borderColor = 'var(--color-brand-500)';
          day.style.color = 'white';
        }
      }
    });
  }
};

export default flatpickr;
