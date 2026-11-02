---
layout: paper
title: On Sun-Zhang's theory of Fano fibrations -- weighted volumes, moduli and bubbling Fano fibrations
title_ja: Fanoファイブレーションの重み付き体積とSun–Zhang理論
authors: Yuji Odaka
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
- math.DG
arxiv_abstract: We revisit the recent theory of Sun-Zhang on general Fano fibration (germs) which emerged from the study of non-compact Kahler-Ricci soliton metrics, primarily from an algebro-geometric perspective. In addition to reviewing the existing framework, we present new results, conjectures, and remarks. These include methods for computing weighted volumes via (restricted) volumes, Laplace transforms, and incomplete Gamma-functions, and a conjectural algebro-geometric construction (``bubbling") of Fano fibration with asymptotically conical base from degenerating Fano fibration.
topic: algebraic-geometry
tags:
- fano-varieties
- k-stability
- kahler-ricci-flow-solitons
- moduli
- birational-geometry
arxiv_id: 2506.14671v3
arxiv_url: https://arxiv.org/abs/2506.14671
arxiv_submitted: '2025-06-17'
arxiv_updated: '2025-09-27'
summary: 非コンパクトKähler–Ricciソリトンから現れるFanoファイブレーションを代数幾何学の側から調べる。Sun–Zhangの重み付き体積を制限体積による積分へ書き換え、計算方法を与えるとともに、モジュライやバブリングの予想的な方向を整理する。
abstract_en: ''
summary_en: The note develops an algebraic view of the invariants attached to Fano contractions in the Sun–Zhang framework. It explains how weighted-volume calculations can be expressed through restricted volumes and divisorial data. This makes explicit computations and optimization accessible to birational methods. Moduli and bubbling are also discussed, with conjectural constructions kept distinct from the established formulas.
abstract_ja: 本論文は非コンパクトな縮小Kähler–RicciソリトンとFanoファイブレーションを結ぶSun–Zhangの理論を再検討する。既存の枠組みの解説に加え、重み付き体積を制限体積、Laplace変換、不完全Gamma関数によって扱う結果を示す。退化するFanoファイブレーションから、漸近的に錐状の底を持つものを取り出す代数幾何学的バブリングは、予想的な構成として提示される。
abstract_source_url: https://arxiv.org/abs/2506.14671
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2506.14671v3](https://arxiv.org/abs/2506.14671)
- **著者:** Yuji Odaka
- **初回投稿日:** 2025-06-17
- **最終更新日:** 2025-09-27
- **主分類・副分類:** math.AG（主分類）; math.DG
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

非コンパクトな縮小Kähler–Ricciソリトンの幾何を、Fanoファイブレーションの代数幾何と結びつけるSun–Zhang理論を扱う。本論文でいうファイブレーションは、正の相対次元を持つ族だけでなく、双有理収縮も含む広い概念である。

著者はこの理論を解説しつつ、中心的な不変量である重み付き体積を計算しやすい形へ書き換える。付値による定義を、因子的付値、制限体積の指数重み付き積分、さらにLaplace変換や不完全Gamma関数による表示へつなげる。

論文全体は解説的性格も強く、新しい命題と既存理論の整理が混在する。モジュライ空間や退化に伴うバブリングも論じるが、Abstractが挙げる漸近錐状の底を持つFanoファイブレーションの代数的バブリングは予想的構成である。一般的な存在定理として紹介しない。

## 背景と問題設定

対象は正規多様体間の射影的全射 $\pi:X\to Y$ で、$X$ は $\mathbb Q$-Gorensteinかつlog terminal、$\pi\_\ast \mathcal O\_X=\mathcal O\_Y$、$-K\_X$ は $\pi$-豊富とする。平坦性や等次元性を一般には要求しない。MMPを用いる場面では標数0、複素幾何との比較では主に $\mathbb C$ 上を考える。

底の点 $p\in Y$ を固定し、中心が $\pi^{-1}(p)$ に含まれ、log discrepancy $A\_X(v)$ が有限な付値 $v$ を扱う。Sun–Zhangの重み付き体積は、反標準切断のフィルトレーションから得るDuistermaat–Heckman型測度を用いて

$$
W(v)=e^{A\_X(v)}\int\_{\mathbb R\_{\geq0}}e^{-x}\thinspace \mathrm{DH}(v),\qquad
W(\pi)=\inf\_vW(v)
$$

と定められる。後者の下限を一般に最小値として実現できるかは、序論が参照する予想と関わる。

## 主結果

### 制限体積の非コンパクト設定（Lemma 1.1）

正規アフィン底上の射影射と相対豊富線束について、閉ファイバー内の部分スキームへの制限体積を、適切なコンパクト化の選択に依存しない形で定義できる。境界の豊富因子の十分大きい倍数を加えた制限体積が安定することが、後の表示の土台となる。

### 下限を計算する対象の置き換え（Proposition 1.7）

$W(\pi)$ は垂直な次数付きイデアル、あるいは指数を付けた垂直イデアルを用いても計算できる。さらに下限を取る付値を、正の有理数倍の素因子的付値に制限できる。これは最小化付値が常に因子的であるという主張ではなく、下限の値を求める対象を置き換える結果である。

### 因子的付値の積分公式（Proposition 1.8）

$\varphi:X'\to X$ 上の素因子 $E$ と $b>0$ に対し、$v=\operatorname{ord}\_E/b$ とする。所定の垂直性の仮定のもとで、

$$
\mathrm{DH}(v)=b\thinspace \operatorname{vol}\_{X'|E}(-\varphi^\ast K\_X-bxE)\thinspace dx,
$$

$$
W(v)=b\thinspace e^{A\_X(E)/b}\int\_0^\infty e^{-x}\operatorname{vol}\_{X'|E}(-\varphi^\ast K\_X-bxE)\thinspace dx
$$

と書ける。付値の不変量を、因子に沿った制限体積の一変数積分へ翻訳する点が計算上の意味である。命題は対数の下界や、最小化に対応するLaplace変換の消滅条件も扱う。

### $X$ 上の因子の場合の明示化（Proposition 1.9）

標数0で $E$ が $X$ 自体の素因子なら、有限個の双有理モデル $X\_i$ と有理数の分割点により制限体積を区分的な交点多項式として表せる。$E\_i$ を狭義変換とすると、その区間で現れる多項式は $((-K\_{X\_i}-yE\_i)^{n-1}\cdot E\_i)$ である。

固定した $E$ に対するスケール最小化では、$c=1/b$ はこれらの区分的多項式のLaplace変換による方程式を満たす。著者は不完全Gamma関数や整数係数の指数多項式による表現を導き、この設定での最小値が可算個の可能性に限られると述べる。

## 証明の見取り図

序論の構成では、まず非コンパクトな設定の制限体積を整え、重み測度をフィルトレーションの体積関数と結びつける。積分表示により、重み付き体積の比較・最小化を通常の体積計算へ移す。

$X$ 上の因子の場合には、BCHM型の有限生成とモデルの有限分割が、区分的な交点多項式を与える。指数重みを付けた積分からLaplace変換とGamma関数が現れる。後半の同変Fanoファイブレーションの定義は、Reebベクトルと特殊試験配置を使ってK安定性の枠組みへ接続する。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2506.14671)
- **Introduction:** [PDF](https://arxiv.org/pdf/2506.14671v3) — Section 1, pp. 1–14冒頭。1.1・1.2の定義と命題の主張を確認し、証明詳細と後続節の技術的議論は精読していない。
- **Introduction中で言及された主要結果:** Lemma 1.1; Propositions 1.7–1.9; Definitions 1.4, 1.5, 1.11, 1.12
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2506.14671v3
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
