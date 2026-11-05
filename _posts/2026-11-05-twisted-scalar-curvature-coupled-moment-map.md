---
layout: paper
title: Twisted scalar curvature as a moment map
title_ja: 捻れたスカラー曲率と正則沈め込みの連立モーメント写像
authors: Ruadhaí Dervan, Thomas Murphy, Julius Ross, Lars Martin Sektnan, Xiaowei Wang
arxiv_primary_category: math.DG
arxiv_categories:
- math.DG
- math.SG
arxiv_abstract: We develop the moment map theory of the twisted scalar curvature of a K\"ahler metric. Primarily, we introduce a coupled system of equations on a holomorphic submersion intertwining the twisted scalar curvature of a K\"ahler metric on the base and the fibrewise scalar curvature of a relatively K\"ahler metric on the total space. This resulting system can be viewed as producing the natural coupled metric geometry of holomorphic submersions, and we show that this system appears canonically as a moment map. The approach generalises to foliations, where we prove similar results.
topic: differential-geometry
tags:
- csck-extremal-kahler-metrics
- foliations
- moduli
- curvature
arxiv_id: 2601.18141v2
arxiv_url: https://arxiv.org/abs/2601.18141
arxiv_submitted: '2026-01-26'
arxiv_updated: '2026-11-02'
summary: 正則沈め込みのファイバー方向のスカラー曲率と、底の捻れたスカラー曲率を一つのモーメント写像として記述する。二つの幾何を結合した方程式と横断Futaki不変量を構成し、葉層構造にも拡張する。
abstract_en: ''
summary_en: A holomorphic submersion carries both fibrewise and base metric data. This paper identifies a coupled moment map that accounts for both pieces at once, with the family supplying the twisting form on the base. It also constructs an invariant whose value is unchanged when the base metric varies within its Kähler class. The framework extends to foliations and does not by itself assert existence of solutions to the coupled equations.
abstract_ja: Kähler計量の捻れたスカラー曲率に対するモーメント写像理論を展開する。正則沈め込みにおいて、底のKähler計量の捻れたスカラー曲率と、全空間の相対Kähler計量のファイバー方向スカラー曲率を結合する系を導入する。この系が沈め込みの自然な計量幾何を表すモーメント写像として現れることを示し、葉層構造にも同様の枠組みを拡張する。
abstract_source_url: https://arxiv.org/abs/2601.18141
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2601.18141v2](https://arxiv.org/abs/2601.18141)
- **著者:** Ruadhaí Dervan, Thomas Murphy, Julius Ross, Lars Martin Sektnan, Xiaowei Wang
- **初回投稿日:** 2026-01-26
- **最終更新日:** 2026-11-02
- **主分類・副分類:** math.DG（主分類）; math.SG
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

定スカラー曲率Kähler計量の方程式は、複素構造の空間上のモーメント写像という解釈を持つ。本論文はその考え方を、単独の複素多様体から、正則写像、正則沈め込み、葉層構造へ広げる。

正則沈め込みではファイバーの計量と底の計量があり、ファイバーの族の変動が底の曲率方程式へ入る。著者らはその相互作用を、ファイバー方向のスカラー曲率とWeil–Petersson形式で捻った底のスカラー曲率を含む連立系として定式化する。

重要なのは、既知の二つのモーメント写像を単に足すだけでは、この幾何から自然に生じる系にならない点である。論文は結合した写像を構成し、その帰結として横断Futaki不変量の計量独立性も示す。方程式の自然な由来を与える結果であり、任意の沈め込みに解が存在するという主張ではない。

## 背景と問題設定

捻れたスカラー曲率は$S(\omega)-\Lambda\_\omega\alpha$であり、$\alpha$は補助的な閉$(1,1)$形式である。コンパクト多様体間の沈め込み

$$
\pi:(M,\omega\_M)\longrightarrow(B,\omega\_B),
\qquad\dim\_{\mathbb R}M=2(m+n),\quad\dim\_{\mathbb R}B=2n
$$

を考える。$\omega\_M$は閉じていて各ファイバー上で非退化であり、全空間での非退化性は仮定しない。$\omega\_B$は底のシンプレクティック形式である。構造と整合的で$\pi$を正則にする可積分複素構造対の空間$\mathcal J\_\pi^{\mathrm{Int}}$に、半正の閉形式$\Omega$とシンプレクティック・ゲージ群$\mathcal G$の作用を入れる。

## 主結果

### ファイバーと底を結合したモーメント写像（Theorem 1.1）

この作用のモーメント写像は、$v\in\operatorname{Lie}\mathcal G$に対し

$$
\begin{aligned}
\langle\mu,v\rangle(J\_M,J\_B)
={}&\int\_M\langle\mu\_M,v\rangle\bigl(S\_V(\omega\_M,J\_M)-\widehat S\_V\bigr)\omega\_M^m\wedge\omega\_B^n\\
&+\int\_B\langle\mu\_B,v\rangle\bigl(S(\omega\_B,J\_B)-\Lambda\_{\omega\_B}\alpha\_\pi-\widehat S\_\pi\bigr)\omega\_B^n
\end{aligned}
$$

で与えられる。全空間上の式では$\omega\_B$の引き戻しを略記する。$S\_V$はファイバーのスカラー曲率、$\widehat S\_V$はその平均、$\alpha\_\pi$は族のWeil–Petersson形式、$\widehat S\_\pi$は底の捻れたスカラー曲率の平均である。$\mu\_M,\mu\_B$はゲージ群作用から得られるモーメント写像である。

零点の解釈では、ファイバー方向のcscK条件と、底の捻れたスカラー曲率が自然な関数空間に直交する条件が結合する。底のスカラー曲率が無条件に点ごと一定である、と単純化してはならない。$\Omega$も初めから正定値ではなく、自然な商を取ることで正定値となる構造が説明される。

### 横断Futaki不変量（Theorem 1.2）

横断Futaki不変量は、底のKähler計量の選択そのものではなく、そのコホモロジー類だけに依存する。モーメント写像から形式的に導く方法に加え、著者らは直接計算による証明も与える。これにより連立系の線形化などの解析的特徴も明らかになる。

### 葉層構造への拡張

Introductionでは、葉方向と横断方向のシンプレクティック形式を備えた葉層$\mathcal F\subset TM$に対しても、対応する連立モーメント写像とFutaki不変量を構成すると述べる。沈め込みのコンパクトなファイバーによる葉層を、より一般の葉層へ拡張する位置づけである。

## 証明の見取り図

有限次元の族では同変微分幾何を用い、無限次元の複素構造空間では断熱極限の漸近展開を用いる。後者は全空間の$\omega\_M+k\omega\_B$を$k\gg0$で見る方法で、ファイバー、底、全体の捻れという三つの幾何を区別する。最適シンプレクティック接続が担う全体の捻れを除いた二つの部分を、独立に分離せず結合することが本論文の視点である。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2601.18141)
- **Introduction:** [PDF](https://arxiv.org/pdf/2601.18141v2) — Section 1, pp. 1–5
- **Introduction中で言及された主要結果:** Theorems 1.1, 1.2; Theorem 4.1（有限次元版への言及）
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2601.18141v2
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
