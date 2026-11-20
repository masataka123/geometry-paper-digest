---
layout: paper
title: Quantitative finiteness for maximal complex totally geodesic submanifolds of non-arithmetic ball quotients
title_ja: 非算術的な球商に含まれる極大全測地部分多様体の個数
authors: Tianzhi Hu, Runze Zhang
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
- math.DG
- math.DS
arxiv_abstract: We prove that the number of maximal complex totally geodesic submanifolds of a smooth finite-volume non-arithmetic ball quotient is bounded linearly by its volume, with a constant depending only on the complex dimension. This gives a quantitative strengthening of the finiteness theorems of Bader--Fisher--Miller--Stover (Invent. Math., 2023) and Baldi--Ullmo (Ann. of Math., 2023).
topic: algebraic-geometry
tags:
- uniformization
- hodge-theory
- hyperbolicity
arxiv_id: 2611.03514v2
arxiv_url: https://arxiv.org/abs/2611.03514
arxiv_submitted: '2026-11-02'
arxiv_updated: '2026-11-16'
summary: 有限体積の滑らかな非算術的複素球商で、極大な真の複素全測地部分多様体の個数を体積の定数倍で抑える。定数は複素次元だけに依存し、従来の有限性定理に一様な量的評価を加える。
abstract_en: We prove that the number of maximal complex totally geodesic submanifolds of a smooth finite-volume non-arithmetic ball quotient is bounded linearly by its volume, with a constant depending only on the complex dimension. This gives a quantitative strengthening of the finiteness theorems of Bader--Fisher--Miller--Stover (Invent. Math., 2023) and Baldi--Ullmo (Ann. of Math., 2023).
summary_en: ''
abstract_ja: Hodge理論から構成した切断を使うと、すべての全測地部分多様体の接方向を次数の制御された一つの因子に集められる。測地流による不変性と交叉理論を組み合わせ、球商を変えても適用できる個数の上界を導く。
abstract_source_url: https://arxiv.org/abs/2611.03514
license_name: Creative Commons Attribution 4.0 International (CC BY 4.0)
license_url: http://creativecommons.org/licenses/by/4.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2611.03514v2](https://arxiv.org/abs/2611.03514)
- **著者:** Tianzhi Hu, Runze Zhang
- **初回投稿日:** 2026-11-02
- **最終更新日:** 2026-11-16
- **主分類・副分類:** math.AG（主分類）; math.DG, math.DS
- **ライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)

## 要約

複素単位球を格子で割った多様体には、それ自身が複素双曲幾何を持つ全測地部分多様体が現れる。非算術的な格子の場合、そのうち包含関係で極大なものは有限個であることが知られていた。

既知の有限性だけからは、異なる球商の個数を何によって比較できるかは分からない。本論文は体積を基準に取ると、次元を固定したすべての球商に同じ線形評価が使えることを示す。

数える対象を接方向の代数的な集合に移すことで、体積と交叉数を結び付ける。非算術性は有限性を引用するためだけの仮定ではなく、これらを含む因子の構成そのものに使われる。

## 背景と問題設定

$X=\Gamma\backslash\mathbb B^n$ とし、$\Gamma$ は捩れのない格子とする。ここでいう部分多様体は連結・正次元で固有にはめ込まれた複素全測地部分空間である。「極大」は、より大きな真の複素全測地部分多様体に含まれないことをいう。

## 主結果

### 次元だけに依存する線形評価（Theorem A）

任意の $n\ge2$ に対し $C\_n>0$ が存在し、複素次元 $n$ の滑らかな有限体積の非算術的球商で

$$
\left|\mathcal T^{\max}(X)\right|\le C\_n\operatorname{Vol}(X)
$$

となる。計量を正則断面曲率 $-1$ に正規化すると、Chern–Gauss–Bonnet公式により右辺は $C\_n(4\pi)^n(-1)^n\chi(X)/(n+1)!$ とも書ける。全測地的な実部分多様体の個数は、この評価の対象に含まれない。

## 証明の見取り図

適切な有限被覆に移り、格子表現の非ユニタリなGalois共役に付随するHodge構造の変動からWronskian切断を作る。その零因子は全測地部分多様体の接方向を含み、次数は体積で一次に抑えられる。測地スプレーに不変な部分を特定し、不変でない成分にGaussグラフ上の交叉を繰り返すと次元が下がる。この有限回の操作で次数の評価を保つことが個数の上界を与える。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2611.03514)
- **Introduction:** [PDF](https://arxiv.org/pdf/2611.03514v2) — §1, pp. 1–4
- **Introduction中で言及された主要結果:** Theorem A, 既知のTheorem 1.1
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2611.03514v2
- **確認したライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)
- **source\_scope:** Abstract and Introduction
