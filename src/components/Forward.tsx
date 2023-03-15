import React from 'react'
import type { TypographyTypeMap, TypographyProps } from '@mui/material/Typography'
import MUITypography from '@mui/material/Typography'
import type { OverridableComponent } from '@mui/material/OverridableComponent'

export const ForwordRef: OverridableComponent<TypographyTypeMap> = React.forwardRef(
  (props: TypographyProps, ref: React.Ref<HTMLSpanElement> | null) => (
    <MUITypography ref={ref} {...props} />
  ),
)