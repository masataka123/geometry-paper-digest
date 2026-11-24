---
layout: paper
title: Szegő kernels and logarithmic flatness of Kähler metrics
title_ja: Szegő核の対数項とKähler計量の曲率係数
authors: Peter Ebenfelt, Ming Xiao, Hang Xu
arxiv_primary_category: math.CV
arxiv_categories:
- math.CV
arxiv_abstract: Let $(L,h)$ be a positive Hermitian line bundle over a complex manifold $M$, inducing a Kähler metric $g$. We give a detailed account of the Hardy space and Szegő kernel of the unit circle bundle of $(L^*,h^*)$ when $M$ is possibly noncompact. Assuming that $M$ admits a complete Kähler metric and that the Ricci curvature of $g$ is bounded below, we use the framework developed in our earlier work on Bergman logarithmic flatness to establish a diagonal expansion of the Szegő kernel and characterize its logarithmic singularity in terms of the Tian--Yau--Zelditch--Catlin expansion of the Bergman kernels of $(L^k,h^k)$. This extends and answers a question of Lu--Tian. We introduce the notions of Szegő and Bergman logarithmic flatness for Kähler metrics, not necessarily globally polarized, and prove that every compact locally homogeneous polarized metric is Szegő logarithmically flat. For Kähler--Einstein metrics, we prove Szegő logarithmic flatness implies Bergman logarithmic
  flatness. Examples arising from Bryant's metrics show that Bergman logarithmic flatness does not imply Szegő logarithmic flatness.
topic: several-complex-variables
tags:
- cr-geometry
- kahler-einstein-metrics
- curvature
arxiv_id: 2611.27099v1
arxiv_url: https://arxiv.org/abs/2611.27099
arxiv_submitted: '2026-11-20'
arxiv_updated: '2026-11-20'
summary: 正直線束の双対の単位円周束において、Szegő核の対数項が境界で無限位数まで消える条件を、底のBergman核の高次係数で特徴づける。底が非コンパクトでも成立し、Kähler–Einstein計量ではBergman対数平坦性も導かれる。
abstract_en: ''
summary_en: The circle action on a polarized disk bundle connects its boundary kernel to holomorphic sections on the base. The higher coefficients of the large tensor power expansion decide exactly when the logarithmic term disappears to all orders. The resulting local test also distinguishes two notions of flatness for Kähler metrics.
abstract_ja: 円周束上の境界特異性と底多様体上の曲率不変量は異なる場所で定義される。正直線束の各テンソル冪に対応する成分を合わせることで、前者の対数係数を後者から読み取れる。
abstract_source_url: https://arxiv.org/abs/2611.27099
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2611.27099v1](https://arxiv.org/abs/2611.27099)
- **著者:** Peter Ebenfelt, Ming Xiao, Hang Xu
- **初回投稿日:** 2026-11-20
- **最終更新日:** 2026-11-20
- **主分類・副分類:** math.CV（主分類）; 副分類なし
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

正直線束の双対の中で長さが1のベクトルを集めると、強擬凸な円周束を得る。そのSzegő核を円板束の内側から境界へ近づけると、極のほかに対数を伴う項が現れる。

LuとTianは、この対数項が無限位数まで消えれば底のBergman核展開の高次係数が消えると示した。本論文は逆向きを示し、非コンパクトな底にも判定を拡張する。

判定は局所分極を通じて計量自体に適用できる。たとえばコンパクトで局所等質な分極Kähler計量はSzegő対数平坦となる。

## 背景と問題設定

$M$ の複素次元を $n$、正直線束を $(L,h)$ とする。境界測度は底の体積と円周作用で定める。非コンパクトな場合にも円板束のHardy空間で正則関数の動径境界値を取り、境界上の閉部分空間とその再生核を構成する。

## 主結果

### 対角展開（Theorem 1）

$M$ が何らかの完備Kähler計量を持ち、分極が定める計量 $g$ が $\operatorname{Ric}(g)\geq-C\_0\omega\_g$ を満たすとする。$\rho(v)=1-|v|\_{h^\ast}^2$ に対し、滑らかな係数を持つ展開

$$
\Pi(v,v)=\frac{\phi(v)}{\rho(v)^{n+1}}+\psi(v)\log\rho(v)
$$

が成り立つ。完備性を仮定する計量と $g$ は異なってよい。

### 高次係数による消滅判定（Theorem 2）

$\psi$ の境界でのTaylor係数は、$L^k$ のBergman核の展開係数 $a\_j$ の線形結合である。特に境界全体で $\psi$ が無限位数まで消えることと、すべての $j>n$ で $a\_j\equiv0$ となることは同値である（Corollary 1）。

### Kähler–Einstein計量での含意（Theorem 3）

Szegő対数平坦なKähler–Einstein計量はBergman対数平坦である。この比較では標準束で捻った展開が現れる。

### 逆向きの反例（Theorem 4）

各 $n\geq2$ で、$\mathbb C^n$ 上にRicci曲率が下から有界な完備Kähler計量で、Bergman対数平坦だがSzegő対数平坦でない例が存在する。

## 証明の見取り図

円周作用の各重みに現れる断面の核を使い、境界変数の対数係数と底の漸近係数とを照合する。二種類の平坦性を比較する段階では、Kähler–Einstein条件により標準束で捻る効果を重みの移動として扱う。逆向きにはBryantの計量から具体例を作る。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2611.27099)
- **Introduction:** [PDF](https://arxiv.org/pdf/2611.27099v1) — §1（pp. 1–6）
- **Introduction中で言及された主要結果:** Theorems 1–4, Corollaries 1–3
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2611.27099v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
