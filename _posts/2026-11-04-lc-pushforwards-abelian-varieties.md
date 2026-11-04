---
layout: paper
title: Pushforwards of lc pairs under morphisms to abelian varieties
title_ja: アーベル多様体へのlc対の直像と大域生成
authors: Fanjun Meng
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: Let $f$ be a morphism from a log canonical pair $(X,\Delta)$ to an abelian variety $A$ and $D\sim_{\mathbb Q}m(K_X+\Delta)$ a Cartier divisor on $X$ with $m>1$ a rational number. We prove that $f_*\mathcal{O}_X(D)$ is globally generated after pullback by an isogeny. Our methods involve birational geometry, mixed Hodge modules and singular Hermitian metrics with the minimal extension property. Moreover, we provide simple counterexamples where the above result fails for plt pairs when $m=1$ and where the existence of Chen--Jiang decompositions fails for plt pairs for any $m\ge1$.
topic: algebraic-geometry
tags:
- positivity
- singularities
- vector-bundles-sheaves
- hodge-theory
- multiplier-ideals-extension
arxiv_id: 2611.04801v1
arxiv_url: https://arxiv.org/abs/2611.04801
arxiv_submitted: '2026-11-03'
arxiv_updated: '2026-11-03'
summary: アーベル多様体への射で、lc対の多重対数標準束の直像が同種写像後に大域生成されることを、有理数倍が1より大きい場合に示す。1倍の場合やChen–Jiang分解には、良好なplt曲面対でも反例がある。kltの場合に結びついていた複数の正値性の性質を、lcの場合には区別する必要がある。
abstract_en: ''
summary_en: Global generation after an isogeny is a positivity property of pluricanonical direct images on abelian varieties. This work proves it for log canonical pairs when the rational pluricanonical multiplier is strictly larger than one. The proof studies the image of restriction to minimal log canonical centers, allowing sections to be lifted without assuming the desired metric on the original direct image. Counterexamples distinguish this conclusion from Chen–Jiang decomposition and from what happens at multiplier one.
abstract_ja: klt対で知られた多重対数標準束の直像の正値性を、log canonical対へ広げる問題を扱う。有理数mが1より大きい場合、m倍の対数標準因子にQ線形同値なCartier因子の直像は、アーベル多様体の同種写像で引き戻した後に大域生成される。一方、m=1でのこの主張と、任意のmでのChen–Jiang分解にはplt曲面対による反例がある。証明では最小lc中心への制限の像に計量を構成し、切断の拡張と組み合わせる。
abstract_source_url: https://arxiv.org/abs/2611.04801
license_name: Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
license_url: http://creativecommons.org/licenses/by-nc-nd/4.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2611.04801v1](https://arxiv.org/abs/2611.04801)
- **著者:** Fanjun Meng
- **初回投稿日:** 2026-11-03
- **最終更新日:** 2026-11-03
- **主分類・副分類:** math.AG（主分類）; 副分類なし
- **ライセンス:** [Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)](http://creativecommons.org/licenses/by-nc-nd/4.0/)

## 要約

アーベル多様体への射で多重標準束を直像すると、もとの多様体の幾何が基底上の連接層の正値性として現れる。滑らかな場合やklt対では、同種写像後の大域生成やChen–Jiang分解などの強い性質が知られている。本論文は、それらがlog canonical対でも成り立つかを調べる。

中心となる肯定的結果は、対数標準因子の有理数倍$m>1$に対応するCartier因子の直像が、適当な同種写像による引き戻しの後で大域生成されるというものである。境界の特異性をkltからlcへ緩めても、この範囲では正値性が残る。

しかし、$m=1$では大域生成の主張自体が失敗する。また、直像をより特殊な層の直和へ分けるChen–Jiang分解は、$m>1$でも一般には存在しない。反例は対数滑らかなplt曲面対で得られ、対数標準因子もnef、big、semiampleという良い性質をもつ。

新しい証明では、直像層全体を最初から扱うのではなく、最小lc中心への制限の像を取り出す。その像の計量と切断の持ち上げを制御することで、既存のkltの場合への単純な帰着が使えない問題を解決する。

## 背景と問題設定

$(X,\Delta)$を複素数体上の射影lc対、$f:X\to A$をアーベル多様体への射とする。$f$は全射とは限らない。有理数$m\geq1$とCartier因子$D$について

$$
D\sim\_{\mathbb Q}m(K\_X+\Delta)
$$

を仮定する。問うのは、有限全射準同型$\varphi:A'\to A$を選んで$\varphi^\ast f\_\ast\mathcal O\_X(D)$を大域生成にできるかということである。

Chen–Jiang分解は、より強い形の表示

$$
f\_\ast\mathcal O\_X(D)\cong\bigoplus\_{i\in I}\bigl(\alpha\_i\otimes p\_i^\ast\mathcal F\_i\bigr)
$$

を要求する。ここで$p\_i:A\to A\_i$はアーベル多様体間の連結ファイバーをもつ射、$\alpha\_i$はtorsion線束、$\mathcal F\_i$は非零のM-regular層である。滑らかな多様体の標準束の直像の直和因子として実現する性質は、この分解、さらに同種写像後の大域生成を導く。しかしlcの場合には逆方向の同値は崩れる。

## 主結果

### 同種写像後の大域生成（Theorem 1.4）

上の設定で有理数$m>1$ならば、ある同種写像$\varphi:A'\to A$に対して

$$
\varphi^\ast f\_\ast\mathcal O\_X(D)
$$

は大域生成される。これはIntroductionのConjecture 1.1を$m>1$で肯定する結果である。最大Albanese次元の底空間上のファイブレーションにおける小平次元の劣加法性などへ応用される。

### 制限の像に入る計量（Theorem 1.5）

$(X,S+B)$を対数滑らかなlc対、$S=\lfloor S+B\rfloor$、$D\sim\_{\mathbb Q}m(K\_X+S+B)$、$m\geq1$とする。$T$は同じ次元の最小lc中心の被約な合併で、各成分が$A$を支配すると仮定する。このとき

$$
\mathcal Q=\operatorname{Im}\left(f\_\ast\mathcal O\_X(D)\longrightarrow(f|\_T)\_\ast\mathcal O\_T(D|\_T)\right)
$$

は半正曲率とminimal extension propertyをもつ特異Hermitian計量を許す。これは$m=1$でも成り立つが、直像層全体が同じ計量をもつことを意味しない。

### 1倍の場合の反例（Theorem 1.7）

$m=1$では同種写像後の大域生成は一般に成立しない。反例は対数滑らかなplt曲面対で、$K\_X+\Delta$はnef、big、semiampleである。対応する直像層には、半正曲率とminimal extension propertyを兼ね備えた特異Hermitian計量も存在しない。

### Chen–Jiang分解の反例（Theorem 1.8）

任意の有理数$m\geq1$について、Chen–Jiang分解および滑らかな多様体の標準束の直像の直和因子としての実現は一般には成り立たない。この反例も対数滑らかなplt曲面対で、対数標準因子はnef、big、semiampleである。他方、この例の直像には同種写像後の大域生成と、上記の特異Hermitian計量が存在する。したがって失敗する性質と残る性質が明確に分離される。

## 証明の見取り図

主定理は基底アーベル多様体の次元とlc中心の個数に関する帰納法で示される。最小lc中心$T$への制限先全体ではなく像$\mathcal Q$を使い、

$$
0\longrightarrow f\_\ast(\mathcal I\_T\otimes\mathcal O\_X(D))\longrightarrow f\_\ast\mathcal O\_X(D)\longrightarrow\mathcal Q\longrightarrow0
$$

を考える。左の層は帰納法で扱い、右の層には混合Hodge加群、巡回被覆、特異点解消を使った正値性の議論を適用する。特異Hermitian計量とminimal extension propertyは、この右の層の分裂性などを制御する。

決定的なのは、$\mathcal Q$の大域切断をもとの直像へ持ち上げる部分が$m>1$を本質的に使うことである。$m=1$を出発点とする従来の帰着は、その出発点がlcの場合に失敗するため使えない。反例は楕円曲線上の非分裂拡張$0\to\mathcal O\_C\to E\to\mathcal O\_C\to0$と、その対称冪の性質を出発点として構成される。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2611.04801)
- **Introduction:** [PDF](https://arxiv.org/pdf/2611.04801v1) — Section 1, pp. 1–6
- **Introduction中で言及された主要結果:** Theorems 1.4, 1.5, 1.7, 1.8
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2611.04801v1
- **確認したライセンス:** [Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)](http://creativecommons.org/licenses/by-nc-nd/4.0/)
- **source\_scope:** Abstract and Introduction
