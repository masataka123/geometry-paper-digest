---
layout: paper
title: Generic vanishing and singularities of theta divisors
title_ja: 一般消滅からテータ因子の特異点を調べる
authors: Fanjun Meng, Mihnea Popa
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: We study the connection between the generic vanishing conjecture for subvarieties of principally polarized abelian varieties and various predictions about the singularities of theta divisors. We deduce new cases of a conjecture on the multiplicities of points on irreducible theta divisors, as well as Beauville's conjecture characterizing Jacobians by the size of their theta singularity loci.
topic: algebraic-geometry
tags:
- singularities
- hodge-theory
arxiv_id: 2611.24361v1
arxiv_url: https://arxiv.org/abs/2611.24361
arxiv_submitted: '2026-11-18'
arxiv_updated: '2026-11-18'
summary: 既約な主偏極を持つアーベル多様体上で、二倍の偏極で捻ったイデアルの消滅から、一倍の偏極での一般消滅を導く。これを第一Hodgeイデアルに用い、テータ因子の重複度の評価と超楕円Jacobianの特徴付けを得る。
abstract_en: We study the connection between the generic vanishing conjecture for subvarieties of principally polarized abelian varieties and various predictions about the singularities of theta divisors. We deduce new cases of a conjecture on the multiplicities of points on irreducible theta divisors, as well as Beauville's conjecture characterizing Jacobians by the size of their theta singularity loci.
summary_en: ''
abstract_ja: テータ因子の高重複点がどれほど大きな集合を作れるかという問題に対し、著者らはアーベル多様体内の部分スキームの分類との関係を示す。予想される次元上界をいくつかの場合に確立し、特異集合が最大次元を持つ場合には偏極多様体そのものを同定する。
abstract_source_url: https://arxiv.org/abs/2611.24361
license_name: Creative Commons Attribution 4.0 International (CC BY 4.0)
license_url: http://creativecommons.org/licenses/by/4.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2611.24361v1](https://arxiv.org/abs/2611.24361)
- **著者:** Fanjun Meng, Mihnea Popa
- **初回投稿日:** 2026-11-18
- **最終更新日:** 2026-11-18
- **主分類・副分類:** math.AG（主分類）; 副分類なし
- **ライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)

## 要約

テータ因子は主偏極を表す因子である。その特異点が集中できる範囲は、背後のアーベル多様体が曲線のJacobianとして得られるかという問題と結び付いている。

著者らは、偏極で二度捻ったイデアル層のコホモロジーから、一度だけ捻った層についてのより精密な情報を取り出す。一般の連接層でこの推論は成り立たず、イデアル層という構造が重要となる。

応用では、既知の分類が使える範囲で重複度の上界が定理になる。さらに特異集合が余次元三の場合、次元に制限を付けずに超楕円曲線のJacobianを特徴付ける。

## 背景と問題設定

$V^i(F)$ は $H^i(A,F\otimes\alpha)\ne0$ となる $\alpha\in\operatorname{Pic}^0(A)$ の集合である。$i>0$ のすべてについてこれが空という条件を $\mathrm{IT}\_0$、余次元が $i$ 以上という条件をGVと呼ぶ。

## 主結果

### 捻ったイデアル層の一般消滅（Theorem A）

分解不能な主偏極アーベル多様体 $(A,\Theta)$ の真の閉部分スキーム $X$ について、$\mathcal I\_X(2\Theta)$ が $\mathrm{IT}\_0$ なら $\mathcal I\_X(\Theta)$ はGV層である。この仮定から $X$ の整性と幾何学的非退化性も従う。

### 分類予想から重複度へ（Theorem D, Corollary E）

次元 $g$ とし、$\Sigma\_m$ を $\Theta$ の重複度が $m$ 以上となる点の集合とする。Conjecture Bは該当するGV部分スキームを、符号と平行移動を除き、曲線のJacobian内の $W\_d$ または三次三次元多様体の中間Jacobian内の直線のFano曲面に分類する予想である。これを仮定すると

$$
\operatorname{mult}\_x\Theta\le (g+1)/2,\qquad \dim\Sigma\_m\le g-2m+1
$$

が従う。$g\le6$、または任意の $g$ で特異集合の次元が $2$ 以下もしくは $g-3$ のとき、これらは無条件に成立する。

### 小さな重複度（Theorem F）

任意の次元で $m\le3$ なら上の次元不等式が成立する。$\Theta$ が1-Du Boisならば $m$ の制限も不要になる。

### 極大次元の場合（Theorem G, Corollary H）

$\dim\operatorname{Sing}(\Theta)=g-3$ なら $(A,\Theta)$ は超楕円曲線のJacobianである。これは既約テータ因子の特異集合が取り得る最大次元である。さらに偏極アーベル多様体 $(A,L)$ では、基点スキームは余次元二の各成分の一般点で被約になる。

## 証明の見取り図

特異性を第一Hodgeイデアルの零点スキームに記録する。このスキームのイデアルに対して二倍の偏極による消滅を利用し、Theorem AによってGV部分スキームの理論を適用する。分類が既知の次元と未解決の一般の場合で、結論の無条件性に差が生じる。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2611.24361)
- **Introduction:** [PDF](https://arxiv.org/pdf/2611.24361v1) — Introduction A, pp. 1–3
- **Introduction中で言及された主要結果:** Theorems A, D, F, G; Corollaries E, H; Conjectures B, C
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2611.24361v1
- **確認したライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)
- **source\_scope:** Abstract and Introduction
