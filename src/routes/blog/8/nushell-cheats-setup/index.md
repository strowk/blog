# My Nushell Cheats Setup

My nushell setup allows me to create command wrappers for my project-specific scripts
and have them available in nushell as first-class commands with autocompletion.

First open config:

```shell
$env.config.buffer_editor = "code"
config nu
```

Then add this:

```shell

const PROJECT_COMMANDS = ("nu-cheats/cheat-sheet.nu" | path expand)
const EMPTY_COMMANDS = ($nu.default-config-dir | path join "empty.nu")

# Create empty.nu if it doesn't exist (one-time setup)
if not ($EMPTY_COMMANDS | path exists) {
  "" | save $EMPTY_COMMANDS
}

const file_to_source = (if ($PROJECT_COMMANDS | path exists) { $PROJECT_COMMANDS } else { $EMPTY_COMMANDS })
source $file_to_source


def cheats_init [] {
  # Create nu-cheats directory
  mkdir nu-cheats
  
  # Create .gitignore
  "*" | save nu-cheats/.gitignore
  
  # Create cheat-sheet.nu with example
  let example = "#!/usr/bin/env nu

# Example command wrapper for a bash script
# Uncomment and modify for your needs:

# def my_command [
#   arg1: string              # Description of arg1
#   --flag (-f)               # Optional flag
# ] {
#   ^bash tools/my-script.sh $arg1
# }

# Example with enum-like completion:

# def web_build [
#   build_type: string@\"nu-complete build-types\"    # Build type
# ] {
#   ^bash tools/web_build.sh $build_type
# }
#
# def \"nu-complete build-types\" [] {
#   ['debug', 'release']
# }
"
  
  $example | save nu-cheats/cheat-sheet.nu
  
  print "✓ Created nu-cheats/ directory"
  print "✓ Created .gitignore"
  print "✓ Created cheat-sheet.nu with examples"
  print "\nEdit nu-cheats/cheat-sheet.nu to add your commands, then restart Nushell."
}
```

Now in project root run:

```shell
cheats_init
```

This will create cheats dir with example command that points to bash script.