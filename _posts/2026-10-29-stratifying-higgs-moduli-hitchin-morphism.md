---
layout: paper
title: Stratifying moduli spaces of Higgs bundles and the Hitchin morphism
title_ja: 被覆による安定性とHiggs束モジュライの層別化
authors: Aryaman Patel, Dario Weissmann
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: We study the behavior of slope-stability of reflexive twisted sheaves over a normal projective variety $X$ under pullback along a cover. Slope-stability is always preserved if the cover does not factor via a quasi-\'etale cover. Fixing the rank, there is one quasi-\'etale cover that checks whether a twisted sheaf remains slope-stable on all Galois covers, yielding a stratification of the moduli space of slope-stable Higgs-bundles. As an application, we determine the image of the Hitchin morphism restricted to the smallest closed stratum of the Dolbeault moduli space when $X$ is smooth. This allows us to determine the image of the Hitchin morphism from the Dolbeault moduli space when $X$ is a hyperelliptic or abelian variety in characteristic $p\ge0$. In particular, we show that Chen-Ng\^o's conjecture holds for hyperelliptic varieties in characteristic $0$.
topic: algebraic-geometry
tags:
- stability
- higgs-nonabelian-hodge
- moduli
- vector-bundles-sheaves
arxiv_id: 2601.08597v1
arxiv_url: https://arxiv.org/abs/2601.08597
arxiv_submitted: '2026-01-13'
arxiv_updated: '2026-01-13'
summary: 正規射影多様体上の捩れ反射的層の傾斜安定性が、有限被覆への引き戻しで保たれる条件を調べる。固定階数で一つの良い被覆による判定と分解型の層別化を得て、アーベル被覆を持つ多様体のHitchin射の像を記述する。
abstract_en: We study the behavior of slope-stability of reflexive twisted sheaves over a normal projective variety $X$ under pullback along a cover. Slope-stability is always preserved if the cover does not factor via a quasi-\'etale cover. Fixing the rank, there is one quasi-\'etale cover that checks whether a twisted sheaf remains slope-stable on all Galois covers, yielding a stratification of the moduli space of slope-stable Higgs-bundles. As an application, we determine the image of the Hitchin morphism restricted to the smallest closed stratum of the Dolbeault moduli space when $X$ is smooth. This allows us to determine the image of the Hitchin morphism from the Dolbeault moduli space when $X$ is a hyperelliptic or abelian variety in characteristic $p\ge0$. In particular, we show that Chen-Ng\^o's conjecture holds for hyperelliptic varieties in characteristic $0$.
summary_en: ''
abstract_ja: 有限被覆に沿う捩れ反射的層の傾斜安定性を研究し、非自明な準エタール被覆を経由しない射では安定性が保たれることを示す。階数を固定すると、すべての被覆上での安定性を一つの準エタールGalois被覆で判定できる。これを反復してHiggs束モジュライを分解型で層別化し、最小の半安定層のHitchin像を求める。アーベル多様体やそのエタール商ではDolbeaultモジュライ全体の像も決定する。
abstract_source_url: https://arxiv.org/abs/2601.08597
license_name: Creative Commons Attribution 4.0 International (CC BY 4.0)
license_url: http://creativecommons.org/licenses/by/4.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2601.08597v1](https://arxiv.org/abs/2601.08597)
- **著者:** Aryaman Patel, Dario Weissmann
- **初回投稿日:** 2026-01-13
- **最終更新日:** 2026-01-13
- **主分類・副分類:** math.AG（主分類）; 副分類なし
- **ライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)

## 要約

安定なベクトル束でも、有限エタール被覆へ引き戻すと直和に分解して安定でなくなることがある。本論文はこの現象を、正規射影多様体上の反射的層と捩れた自己準同型を持つ対象へ拡張して調べる。

滑らかでない空間では、エタール被覆に代わって準エタール被覆が重要になる。著者らは、非自明な準エタール被覆を経由しない有限分離射による反射的引き戻しが安定性を保つことを示す。また標数0では階数を固定すると、一つの「良い被覆」だけで全被覆に対する安定性を判定できる。

この結果を反復して安定直和因子の階数が固定する被覆を作り、Higgs束モジュライを分解型で層別化する。応用として階数1へ分解する層のHitchin像を決定し、アーベル多様体をエタールGalois被覆に持つ多様体ではDolbeaultモジュライ全体の像を記述する。

## 背景と問題設定

$F$をベクトル束とし、$F$-捩れ層とは層$V$と写像$\theta:V\to V\otimes F$の組である。偏極を固定して傾斜安定性を考え、被覆上には引き戻し偏極を用いる。反射的引き戻しは

$$
\pi^{[\ast]}V=(\pi^\ast V)^{\vee\vee}
$$

で定義する。準エタールとは、余次元2以上の部分集合を除いてエタールとなる有限分離被覆を意味する。

## 主結果

### 分岐と安定性の保存（Theorem 1.1）

正規射影多様体間の有限分離射$\pi:Y\to X$が非自明な有限エタール射を経由しなければ、$F$-捩れベクトル束の傾斜安定性は通常の引き戻しの安定性と同値になる。

反射的層では、非自明な有限準エタール射を経由しないという条件に置き換える。このとき$(V,\theta)$が安定であることと、$(\pi^{[\ast]}V,\pi^{[\ast]}\theta)$が安定であることが同値である。局所自由な場合と反射的な場合で、排除する被覆のクラスが異なる点が重要である。

### 一つの被覆による判定（Theorem 1.2、標数0）

階数$r\geq2$を固定すると、準エタールGalois被覆$X\_{r,\mathrm{refl\text{-}good}}\to X$が存在し、階数$r$の安定な捩れ反射的層がすべての被覆への反射的引き戻しで安定であることを、この被覆だけで判定できる。

Galois作用は引き戻した束の安定直和因子の同型類に推移的に作用するため、その因子の階数は共通となる。この「分解型」が変わらなくなる分解被覆を構成し、安定Higgs束のモジュライの層別化を得る。Introductionは正標数では被覆次数に関する注意が必要であると区別し、この標数0の定理を無条件で全標数へ主張していない。

### 階数1層のHitchin像（Theorem 1.3、標数0）

あるエタールGalois被覆$X\_{r,H\text{-}\mathrm{split}}\to X$より上の被覆では、特性多項式が一次因子に完全分解するという条件が変わらなくなる。$X$が滑らかな場合、自明な階数$r$束のHilbert多項式$P\_0$を持つ半安定Higgs束の階数1層の集合論的像は、ちょうどこの完全分解する多項式の集合である。

ここでHitchin底は$\bigoplus\_{i=1}^rH^0(X,\operatorname{Sym}^iF)$である。完全分解するスペクトルデータを、エタール自明化可能な基礎ベクトル束を持つHiggs束で実現できることが像の逆包含を与える。

### アーベル被覆を持つ多様体（Theorem 1.4）

滑らかな射影多様体$X$がアーベル多様体$Y$からのエタールGalois被覆を持ち、$G=\operatorname{Gal}(Y/X)$とすると、DolbeaultモジュライからのHitchin射の集合論的像は

$$
\operatorname{im}(h^r)=\left(H^0(Y,\Omega\_Y^1)^r/\mathfrak S\_r\right)^G
$$

と記述される。右辺は被覆上のHitchin底の部分集合として同定する。特に$X$自体がアーベル多様体なら

$$
\operatorname{im}(h^r)=H^0(X,\Omega\_X^1)^r/\mathfrak S\_r
$$

である。Introductionはこの結果を標数$p\geq0$で述べ、標数0のhyperelliptic多様体についてChen–Ngô予想に帰結すると説明する。

## 証明の見取り図

Galois被覆の場合、$Y\times\_XY$の余次元1での連結性を用いて、準エタール被覆を経由しない条件を特徴づける。この特徴づけを安定性の保存に使い、良い被覆の構成では安定直和因子へのGalois作用、降下、Jordanの定理を組み合わせる。Hitchin像の記述では一次因子分解の降下とエタール自明化可能な束の構成が働き、アーベルの場合は余接束の自明性が決定的となる。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2601.08597)
- **Introduction:** [PDF](https://arxiv.org/pdf/2601.08597v1) — Section 1, pp. 1–4（Notationまで）
- **Introduction中で言及された主要結果:** Theorems 1.1–1.4
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2601.08597v1
- **確認したライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)
- **source\_scope:** Abstract and Introduction
