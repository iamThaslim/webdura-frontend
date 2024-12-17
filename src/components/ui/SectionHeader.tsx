interface SectionHeaderProps {
    title: string
    description?: string
  }
  
/**
 * Renders a section header with a title and optional description.
 *
 * @param {SectionHeaderProps} props - The props for the section header.
 * @param {string} props.title - The title to be displayed.
 * @param {string} [props.description] - An optional description to be displayed below the title.
 *
 * @returns A JSX element representing the section header.
 */

  export function SectionHeader({ title, description }: SectionHeaderProps) {
    return (
      <div className="space-y-2 mb-8">
        <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
        {description && (
          <p className="text-muted-foreground">{description}</p>
        )}
      </div>
    )
  }
  