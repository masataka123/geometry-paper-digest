---
layout: paper
title: The Cayley-Bedregal reduction for Milnor and Hirzebruch-Milnor classes
title_ja: 完全交差のMilnor類を一つの超曲面へ還元する
authors: R. Callejas-Bedregal, F. Caraballo, M. F. Z. Morgado, J. Seade
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: "The Cayley--Bedregal reduction replaces a complete intersection $\\{f_1=\\dots=f_r=0\\}$ by the hypersurface $\\sum_i\\varphi_if_i=0$ in the projectivized dual bundle. For an isolated complete intersection singularity of corank $c$, we express the Milnor class of this hypersurface on its singular fibre $\\mathbb P^{c-1}$ in terms of the Milnor numbers of generic systems obtained by taking linear combinations of the defining equations. Its degree is the original Milnor number, and the higher components recover the Milnor numbers of the systems with fewer equations. These numbers are invariants of the analytic germ.\n  Our second main result concerns the Hodge-theoretic refinement. For a complete intersection defined by a regular section of a rank-$r$ algebraic vector bundle, the Hirzebruch--Milnor class is determined by that of the Cayley--Bedregal hypersurface: the push-forward of the normalized Hirzebruch--Milnor class of the hypersurface, in the sense of Cappell, Maxim,\
  \ Schürmann and Shaneson, is $(-y)^{r-1}$ times that of the complete intersection, with no positivity assumption on the bundle. The factor $(-y)^{r-1}$ comes from the motivic decomposition of the projective bundle, and at $y=-1$ the identity recovers Aluffi's comparison of Milnor classes. When the tautological bundle is very ample, the hypersurface formula of Maxim, Saito and Schürmann then gives the Hirzebruch--Milnor class of the complete intersection through the vanishing cycles of a single function, avoiding their induction through intermediate complete intersections and their restriction to powers of one line bundle. In integral homology we prove the analytic form of Aluffi's identity, and obtain formulas for the Milnor class in terms of local Milnor fibres and for the Chern--Schwartz--MacPherson class of any projective scheme."
topic: algebraic-geometry
tags:
- chern-classes
- singularities
- hodge-theory
- algebraic-cycles-enumerative
arxiv_id: 2611.13267v1
arxiv_url: https://arxiv.org/abs/2611.13267
arxiv_submitted: '2026-11-09'
arxiv_updated: '2026-11-09'
summary: 完全交差の特異点を、射影化した双対束内の一つのCayley超曲面へ置き換え、Milnor類とそのHodge理論的精密化を比較する。Hirzebruch–Milnor類の押し出し公式は束の正値性を仮定せず、局所的には低い本数の方程式からなる系のMilnor数も回復する。
abstract_en: ''
summary_en: A complete intersection can be studied through a single hypersurface in a larger projective bundle. This paper determines how the singularity classes change under that passage, including information visible only in higher-dimensional components over an isolated singularity. It also establishes a Hodge-theoretic push-forward comparison without requiring the original bundle to be positive. The additional positivity needed for a vanishing-cycle application is kept separate from the comparison itself.
abstract_ja: 複数の方程式で定まる完全交差の特性類を、一つの方程式の特性類から求める方法を扱う。孤立特異点上の射影空間に支持されたMilnor類には、元の特異点のMilnor数だけでなく一般の線形結合による部分系の情報も含まれる。さらに、正規化Hirzebruch–Milnor類の比較を任意の代数的ベクトル束に拡張し、消滅サイクルによる計算への応用では別途非常に豊富という仮定が必要になることを明確にする。
abstract_source_url: https://arxiv.org/abs/2611.13267
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2611.13267v1](https://arxiv.org/abs/2611.13267)
- **著者:** R. Callejas-Bedregal, F. Caraballo, M. F. Z. Morgado, J. Seade
- **初回投稿日:** 2026-11-09
- **最終更新日:** 2026-11-09
- **主分類・副分類:** math.AG（主分類）; 副分類なし
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Milnor類は、特異な完全交差について仮想的なChern類とChern–Schwartz–MacPherson類の差を測る。孤立特異点ではMilnor数に帰着するが、特異集合が正の次元を持つと、その各次元に情報が分布する。本論文は完全交差をCayley超曲面へ置き換えることで、この情報を一つの方程式から取り出す。

第一の主題は局所的な復元である。孤立完全交差特異点を持つ点の上では、Cayley超曲面の特異集合は射影空間になる。その上のMilnor類を、定義方程式の一般の線形結合から作る系のMilnor数によって記述する。

第二の主題はHodge理論への拡張である。正規化Hirzebruch–Milnor類を押し出すと、元の完全交差の類に $(-y)^{r-1}$ を掛けたものになる。この比較に束の豊富性は不要である。一方、一つの関数の消滅サイクルから具体的な公式を得る応用には、射影束上の同語反復直線束が非常に豊富であるという追加条件を課す。

## 背景と問題設定

$M$ をコンパクト複素多様体、$E\to M$ を階数 $r$ の正則ベクトル束、$s$ を正則列を定める切断とし、$Z=Z(s)$ とする。$p:\mathbb P(E^\vee)\to M$ 上で
$$
\widehat s(x,[\varphi])=\varphi(s(x)),\qquad X=Z(\widehat s)
$$
を考える。局所的に $s=(f\_1,\ldots,f\_r)$ なら $X$ は $\sum\_i\varphi\_i f\_i=0$ という超曲面である。$Z$ 上のファイバーは $\mathbb P^{r-1}$、その外では $\mathbb P^{r-2}$ となる。

Aluffiの代数的な比較公式が先行する。本論文はその解析的・整係数ホモロジー版を与え、局所類とHodge理論的精密化を調べる。著者らの旧版にあった比較式は修正が必要であることもIntroductionで明記されており、旧式をそのまま一般化した結果として読むべきではない。

## 主結果

### Milnor類の押し出し（Theorem 1.7）

包含を $i:Z\hookrightarrow M$ とすると、論文のMilnor類の符号規約の下で
$$
p\_\ast \mathcal M(X)=i\_\ast \mathcal M(Z)
$$
が整係数ホモロジーで成り立つ。局所完全交差を定める正則切断が仮定であり、束自体に正値性は要求しない。

### 孤立特異点の上の全成分（Theorem 3.6）

$x$ を $Z$ の孤立特異点、$c=r-\operatorname{rank}(ds\_x)$ と置く。$X$ の特異ファイバー $S\_x\simeq\mathbb P^{c-1}$ 上で $H=c\_1(\mathcal O\_{S\_x}(1))$ とする。$r-k$ 本の一般の線形結合からなる系のMilnor数を $\mu\_k$ とすると、
$$
\mathcal M\_x=\mu\_0[\mathrm{pt}]+\sum\_{k=1}^{c-1}(-1)^k\mu\_k(1+H)^{k-1}\cap[\mathbb P^k],
\qquad \mu\_0=\mu(Z,x).
$$
零次元成分の次数は元のMilnor数であり、高次成分は少ない方程式からなる系のMilnor数を復元する。これらの数は解析的芽の不変量となる。

### Hodge理論的比較（Theorem 4.4）

$M$ を非特異な完備複素代数多様体、$E$ を代数的とする。正規化した類 $\mathcal M\_{y\ast }=T\_{y\ast }^{\mathrm{vir}}-T\_{y\ast }$ について
$$
p\_\ast \mathcal M\_{y\ast }(X)=(-y)^{r-1}i\_\ast \mathcal M\_{y\ast }(Z)
\quad\text{in }H\_{2\ast }(M,\mathbb Q)[y]
$$
が成り立つ。$y=-1$ でMilnor類の比較を回復する。一般の $y$ に現れる係数は、単なる符号補正ではなく射影束の動機的分解に由来する。

### 消滅サイクルへの応用（Theorem 4.8）

$\mathcal O\_{\mathbb P(E^\vee)}(1)$ が非常に豊富である場合には、一般の補助切断を用いた一つの関数 $\widehat s/\widehat s'$ の消滅サイクルから完全交差のHirzebruch–Milnor類を求められる。Introductionでは概略として次のように述べられている：この還元は中間的な完全交差を順に扱う帰納法を避け、同一の直線束の冪という従来の制約を外す。詳細な消滅サイクル公式そのものはIntroductionに列挙されていない。

## 証明の見取り図

ファイバーの記述から相対Grothendieck群で
$$
[X\to M]=[\mathbb P^{r-2}][\operatorname{id}\_M]+\mathbb L^{r-1}[Z\to M]
$$
を得る。$\chi\_y(\mathbb L)=-y$ がHodge理論側の係数を生み、仮想特性類側は普遍的な類の恒等式によって比較する。局所公式では有限決定性による射影モデルで次数を計算し、非特性的な超平面制限によって高次成分を決める。混合Hodge加群やスペクトル付き特性類の水準で別の特殊化構成と比較する問題は、残された課題として区別される。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2611.13267)
- **Introduction:** [PDF](https://arxiv.org/pdf/2611.13267v1) — Introduction, pp. 1–2
- **Introduction中で言及された主要結果:** Theorems 1.7, 3.6, 4.4, 4.8（Introductionで説明）
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2611.13267v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
