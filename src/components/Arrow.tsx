export function Arrow({ back = false }: { back?: boolean }) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" style={back ? { transform: "rotate(180deg)" } : undefined}><path d="M5 12h14M12 5l7 7-7 7" /></svg>;
}
