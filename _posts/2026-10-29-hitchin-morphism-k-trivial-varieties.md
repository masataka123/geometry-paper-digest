---
layout: paper
title: The Hitchin morphism for K-trivial varieties
title_ja: 標準因子が数値的自明な多様体のHitchin射
authors: Aryaman Patel, Dario Weissmann
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: We study the Hitchin morphism for higher dimensional varieties and show that, for a certain class of varieties which we call r-small, the set-theoretic image of the Hitchin morphism from the Dolbeault moduli space coincides with the spectral base. In other words, a stronger version of the conjecture of Chen and Ng\^o holds for this class of varieties, which includes K-trivial varieties. As part of the proof, we slightly modify the construction of spectral covers to obtain normal spectral covers.
topic: algebraic-geometry
tags:
- higgs-nonabelian-hodge
- moduli
- stability
- vector-bundles-sheaves
arxiv_id: 2604.03217v1
arxiv_url: https://arxiv.org/abs/2604.03217
arxiv_submitted: '2026-04-03'
arxiv_updated: '2026-04-03'
summary: 高次元Higgs束のHitchin射について、標準因子が数値的自明ならDolbeaultモジュライ空間からスペクトル底への全射性を示す。対称微分の零点条件へ一般化し、正規化したスペクトル被覆と分岐純性を用いて実現するHiggs束を構成する。
abstract_en: We study the Hitchin morphism for higher dimensional varieties and show that, for a certain class of varieties which we call r-small, the set-theoretic image of the Hitchin morphism from the Dolbeault moduli space coincides with the spectral base. In other words, a stronger version of the conjecture of Chen and Ng\^o holds for this class of varieties, which includes K-trivial varieties. As part of the proof, we slightly modify the construction of spectral covers to obtain normal spectral covers.
summary_en: ''
abstract_ja: Hitchin射の像を高次元多様体上で調べ、r-smallと呼ぶクラスではDolbeaultモジュライ空間からの集合論的像がスペクトル底全体に一致することを示す。このクラスには標準因子が数値的自明な滑らかな射影多様体が含まれる。これはHiggs束のモジュライスタックからの全射性を予想するChen–Ngô予想より強い実現結果であり、証明では正規なスペクトル被覆を得るよう従来の構成を修正する。
abstract_source_url: https://arxiv.org/abs/2604.03217
license_name: Creative Commons Attribution 4.0 International (CC BY 4.0)
license_url: http://creativecommons.org/licenses/by/4.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2604.03217v1](https://arxiv.org/abs/2604.03217)
- **著者:** Aryaman Patel, Dario Weissmann
- **初回投稿日:** 2026-04-03
- **最終更新日:** 2026-04-03
- **主分類・副分類:** math.AG（主分類）; 副分類なし
- **ライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)

## 要約

Hitchin射はHiggs場の特性多項式を記録する写像である。曲線上では全射性が知られるが、高次元ではHiggs場の可積分性が制約となり、すべての対称微分データが実現されるわけではない。Chen–Ngôのスペクトル底は、この制約を反映する自然な行き先である。

本論文は、標準因子が数値的自明な滑らかな射影多様体で、スペクトル底のすべての点をDolbeaultモジュライ空間上のHiggs束で実現できることを示す。任意のHiggs束を許すスタックからの全射性より強く、自明束と同じHilbert多項式を持つ半安定束のモジュライ空間で十分となる。

さらに対称微分が因子状の零点集合を持たないという条件へ一般化する。その条件を確認しやすくするためr-smallという傾斜条件を導入し、K-trivialの場合をその特別な例として位置づける。

## 背景と問題設定

基礎体は標数0の代数閉体とし、射影多様体には偏極を固定する。階数$r$のHitchin底とスペクトル底は

$$
A\_X^r=\bigoplus\_{i=1}^rH^0(X,\operatorname{Sym}^i\Omega\_X^1),\qquad B\_X^r\subseteq A\_X^r
$$

である。Chen–Ngô予想はHiggs束のモジュライスタックから$B\_X^r$への全射性を求める。本論文では、自明な階数$r$束のHilbert多項式$P\_0$を固定したGieseker半安定Higgs束のモジュライ空間$M\_{X,\mathrm{Dol}}^r$からの写像を考える。

## 主結果

### K-trivial多様体での全射性（Theorem 1.2）

滑らかな射影多様体$X$の標準因子が$K\_X\equiv0$なら、すべての$r\geq1$について

$$
h\_{X,\mathrm{Dol}}^r:M\_{X,\mathrm{Dol}}^r\longrightarrow B\_X^r
$$

は全射である。ここで対象は$\operatorname{GL}\_r$のHiggs束であり、任意の簡約群へ一般化した主張ではない。またIntroductionでの主張は集合論的な像についてのものである。

### 対称微分の零点による一般化（Theorem 1.3）

$1\leq k\leq r$のすべてについて、$\operatorname{Sym}^{k(k-1)}\Omega\_X^1$の非零大域切断で零点集合が余次元1となるものが存在しないと仮定する。このとき$h\_{X,\mathrm{Dol}}^k$はすべての$k\leq r$で全射である。さらに各ファイバーには、基礎となるベクトル束が半安定でChern類が消えるHiggs束を取れるとIntroductionは述べる。

### 傾斜による十分条件（Definition 1.4）

$\Omega\_X^1$が傾斜半安定で、固定偏極に関して

$$
\mu\bigl(\operatorname{Sym}^{k(k-1)}\Omega\_X^1\bigr)<1\qquad(1\leq k\leq r)
$$

なら$X$をr-smallと呼ぶ。この条件から上の零点条件が従う。$K\_X\equiv0$の場合は余接束の傾斜が0で半安定となるため、任意の$r$について条件を満たす。

一般にはDolbeaultモジュライ空間からの全射性は成立せず、その必要十分条件は今後の問題である。滑らかな双有理変換で通常のHitchin射の集合論的像が不変かというConjecture 1.6は、Chen–Ngô予想の同値な言い換えとして提示され、一般に証明済みという意味ではない。

## 証明の見取り図

通常のスペクトル被覆の構成を修正して正規な被覆を得る。対称微分の因子状零点を排除する条件と分岐 locus の純性を組み合わせ、必要なベクトル束を構成するのがIntroductionに示される核である。K-trivialの場合はこの一般的な構成へ余接束の半安定性を適用する。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2604.03217)
- **Introduction:** [PDF](https://arxiv.org/pdf/2604.03217v1) — Section 1, pp. 1–3（Notationまで）
- **Introduction中で言及された主要結果:** Theorems 1.2、1.3、Definition 1.4、Conjecture 1.6
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2604.03217v1
- **確認したライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)
- **source\_scope:** Abstract and Introduction
