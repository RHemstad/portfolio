/* 02 Institutions & Appointments — masthead-style table. Column headers
   only render meaningfully on tablet/desktop; on mobile the grid
   collapses to stacked rows and the header row is hidden via CSS
   (redundant once stacked). Two placeholder rows, matching the
   approved design — do not invent institution names, roles, dates, or
   levels. */
function AppointmentsSection() {
  return (
    <div id="tp-appointments" className="teaching-appt-section">
      <div className="teaching-section-heading">
        <span className="teaching-section-number">02</span>
        <h2>Institutions &amp; Appointments</h2>
      </div>

      <div className="teaching-appt-header-row" aria-hidden="true">
        <span>Institution</span>
        <span>Role</span>
        <span>Dates</span>
        <span>Level</span>
      </div>

      <div className="teaching-appt-row">
        <span className="teaching-appt-name">[Placeholder — Institution Name]</span>
        <span className="teaching-appt-field">[Placeholder — role]</span>
        <span className="teaching-appt-field teaching-appt-field--italic">[years]</span>
        <span className="teaching-appt-field teaching-appt-field--italic">[undergrad / grad]</span>
      </div>

      <div className="teaching-appt-row teaching-appt-row--last">
        <span className="teaching-appt-name">[Placeholder — Institution Name]</span>
        <span className="teaching-appt-field">[Placeholder — role]</span>
        <span className="teaching-appt-field teaching-appt-field--italic">[years]</span>
        <span className="teaching-appt-field teaching-appt-field--italic">[undergrad / grad]</span>
      </div>
    </div>
  );
}

export default AppointmentsSection;
