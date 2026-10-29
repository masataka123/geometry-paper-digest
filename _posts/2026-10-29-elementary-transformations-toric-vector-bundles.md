---
layout: paper
title: Elementary transformations of toric vector bundles
title_ja: トーリックベクトル束の基本変換をフィルトレーションで記述する
authors: Sukmoon Huh
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: 'We describe negative and positive elementary transformations of toric vector bundles in terms of Klyachko filtrations. We first determine the filtrations of the restriction of a toric vector bundle to an invariant prime divisor and then derive explicit formulas for the transformed bundle: only the filtration at the distinguished ray changes. As applications, we interpret adding and removing invariant boundary components of logarithmic tangent bundles as elementary transformations and recover the residue sequence for logarithmic cotangent bundles.'
topic: algebraic-geometry
tags:
- vector-bundles-sheaves
- toric-geometry
arxiv_id: 2610.34885v1
arxiv_url: https://arxiv.org/abs/2610.34885
arxiv_submitted: '2026-10-26'
arxiv_updated: '2026-10-26'
summary: トーリックベクトル束の負・正の基本変換を、Klyachkoフィルトレーションの操作として記述する。変更されるのは指定した不変因子に対応する一本のフィルトレーションであり、対数接束の境界成分の追加・除去にも適用する。
abstract_en: 'We describe negative and positive elementary transformations of toric vector bundles in terms of Klyachko filtrations. We first determine the filtrations of the restriction of a toric vector bundle to an invariant prime divisor and then derive explicit formulas for the transformed bundle: only the filtration at the distinguished ray changes. As applications, we interpret adding and removing invariant boundary components of logarithmic tangent bundles as elementary transformations and recover the residue sequence for logarithmic cotangent bundles.'
summary_en: ''
abstract_ja: トーリックベクトル束の不変素因子への制限をKlyachkoデータで記述し、それを基に負および正の基本変換の明示的なフィルトレーション公式を導く。変換では指定したrayのフィルトレーションだけが変わる。対数接束における不変境界成分の追加と除去をこの枠組みで解釈し、双対化を通じて対数余接束の留数完全列も回復する。
abstract_source_url: https://arxiv.org/abs/2610.34885
license_name: Creative Commons Attribution 4.0 International (CC BY 4.0)
license_url: http://creativecommons.org/licenses/by/4.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.34885v1](https://arxiv.org/abs/2610.34885)
- **著者:** Sukmoon Huh
- **初回投稿日:** 2026-10-26
- **最終更新日:** 2026-10-26
- **主分類・副分類:** math.AG（主分類）; 副分類なし
- **ライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)

## 要約

ベクトル束の基本変換は、指定した因子に沿って束を変更し、一般点でのファイバーを保つ操作である。本論文は、この古典的な操作をトーリックベクトル束の分類データであるKlyachkoフィルトレーションだけから計算できる形にする。

重要なのは、束を不変素因子へ制限したときのデータを正しく捉えることである。制限後の一般ファイバーは元のベクトル空間そのものではなく、当該因子に対応するフィルトレーションの随伴次数付き空間として現れる。この記述を経由して、基本変換が一本のフィルトレーションの変更として書かれる。

負・正の変換を統一的に扱うことにより、対数接束で境界成分を増減する操作や、対数余接束の留数完全列が同じ仕組みから理解できる。安定性やモジュライへの利用は将来の応用として挙げられており、本論文がそれらの分類を完了したという主張ではない。

## 背景と問題設定

滑らかなトーリック多様体上の同変ベクトル束は、ファンの各rayに付随する適合的フィルトレーションで表される。この対応を用いれば束の幾何学的操作を有限次元線形代数に移せるが、基本変換によるフィルトレーションの変化を明示する必要がある。

不変因子$D$上の同変商束

$$
q:\mathcal E|\_D\twoheadrightarrow\mathcal Q
$$

が変換の入力となる。因子上では安定化部分トーラスが作用するため、重み成分への分解と有効な商トーラスへの移行を区別して記述することが出発点になる。

## 主結果

### 制限束と負の基本変換

Introductionでは概略として次のように述べられている。制限束を安定化部分群の重みで分解し、元のフィルトレーションの交わりと商写像から誘導フィルトレーションを求める。商$q$は指定rayの随伴次数付き成分に写像を誘導し、負の基本変換はその核の逆像を取ることで記述される。他のrayのフィルトレーションは変わらない。

Introductionには添字を含む完全な公式はないため、ここでは後続節の公式を推測して補わない。結果の意味は、束を幾何学的に再構成しなくても、既存の分類データを局所的に修正すれば変換後の束を得られる点にある。

### 正の変換と対数束への応用

正の基本変換についても対応するフィルトレーション、完全列、行列式の公式を与える。対数接束では不変境界成分を加える操作が負の基本変換であり、取り除く操作が正の基本変換になる。双対化すると対数余接束のPoincaré留数完全列を回復する。

## 証明の見取り図

論理の順序は、因子への制限の記述、次数付き商写像の核、基本変換のフィルトレーション、対数束への適用である。Introductionは射影空間の接束とその外積、同変線束の直和などを例として挙げる。これらは一般公式の計算上の有用性を示す例であり、本記事では後続節の具体的計算までは確認していない。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2610.34885)
- **Introduction:** [PDF](https://arxiv.org/pdf/2610.34885v1) — Section 1, pp. 1–2
- **Introduction中で言及された主要結果:** Introductionには主結果の番号付き定式化はなく、制限・基本変換・対数束への応用が説明される
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2610.34885v1
- **確認したライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)
- **source\_scope:** Abstract and Introduction
