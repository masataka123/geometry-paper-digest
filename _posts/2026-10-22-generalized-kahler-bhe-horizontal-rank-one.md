---
layout: paper
title: Generalized Kahler BHE threefolds
title_ja: 一般化Kähler BHE三次元多様体の水平階数と構成
authors: Beatrice Brienza
arxiv_primary_category: math.DG
arxiv_categories:
- math.DG
arxiv_abstract: We study the notion of generalized Kahler Bismut--Hermitian--Einstein (GKBHE) manifolds, namely generalized K\"ahler manifolds for which both Bismut Ricci forms vanish, and we develop a theory for such structures on compact threefolds. We organize the analysis according to the horizontal rank, an invariant taking values in $\{0,1,2\}$ that measures the relative position of the canonical foliations associated with the two Hermitian structures. We characterize the case of horizontal rank $0$ (which corresponds to K\"ahler Ricci flat geometry) and describe the case of horizontal rank $1$, revealing its close interplay with the steady $\nu$-soliton equation in K\"ahler geometry. This description also provides a tool for constructing new compact GKBHE threefolds.
topic: differential-geometry
tags:
- hermite-einstein-metrics
- curvature
- foliations
- symplectic-contact-geometry
arxiv_id: 2610.30130v1
arxiv_url: https://arxiv.org/abs/2610.30130
arxiv_submitted: '2026-10-21'
arxiv_updated: '2026-10-21'
summary: 二つの複素構造が同じ計量に関してBismut–Hermitian–Einsteinとなる一般化Kähler三次元多様体を調べる。標準葉層の相対位置を測る水平階数が一の場合、横断Kähler曲面上のRicci–Hamiltonian方程式を導き、正のスカラー曲率と適切なトーラス束の下で逆にそのような構造を構成する。
abstract_en: We study the notion of generalized Kahler Bismut--Hermitian--Einstein (GKBHE) manifolds, namely generalized K\"ahler manifolds for which both Bismut Ricci forms vanish, and we develop a theory for such structures on compact threefolds. We organize the analysis according to the horizontal rank, an invariant taking values in $\{0,1,2\}$ that measures the relative position of the canonical foliations associated with the two Hermitian structures. We characterize the case of horizontal rank $0$ (which corresponds to K\"ahler Ricci flat geometry) and describe the case of horizontal rank $1$, revealing its close interplay with the steady $\nu$-soliton equation in K\"ahler geometry. This description also provides a tool for constructing new compact GKBHE threefolds.
summary_en: ''
abstract_ja: 一般化Kähler構造の二つのBismut Ricci形式がともに零となるGKBHE多様体を、コンパクト複素三次元で研究する。二つのHermitian構造に付随する標準葉層の相対位置を水平階数で測り、階数零はRicci平坦Kähler幾何に一致すること、階数一では横断Kähler曲面の幾何が定常重み付きソリトン方程式と結び付くことを示す。さらにその横断データからGKBHE構造を再構成する逆向きの定理を与える。水平階数二の解析は今後の課題として区別される。
abstract_source_url: https://arxiv.org/abs/2610.30130
license_name: Creative Commons Attribution 4.0 International (CC BY 4.0)
license_url: http://creativecommons.org/licenses/by/4.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.30130v1](https://arxiv.org/abs/2610.30130)
- **著者:** Beatrice Brienza
- **初回投稿日:** 2026-10-21
- **最終更新日:** 2026-10-21
- **主分類・副分類:** math.DG（主分類）; 副分類なし
- **ライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)

## 要約

Bismut接続の捩れが閉じ、Ricci形式が零となるBHE計量は、非Kähler幾何におけるCalabi–Yau計量の類似として研究されている。本論文ではさらに、同じ計量に適合する二つの複素構造が一般化Kähler構造をなし、両方ともBHEとなる場合を扱う。

この二重構造から生じる標準葉層の位置関係を、零・一・二の値を取る水平階数で測る。階数零はRicci平坦Kählerの場合に戻る。階数一では、横断Kähler曲面上の一つの関数がHamiltonianとRicciポテンシャルを同時に担うことが分かる。

主たる構成定理は逆向きである。適切な曲面上の関数と接続曲率を指定したトーラス束から、同じ計量を共有するGKBHE構造の対を作る。コンパクト底上で関数が消える点を越えて複素構造を延長することが必要になる。階数二は本稿の分類には含まれない。

## 背景と問題設定

一般化Kähler構造 $(M,I,J,g)$ では、二つの複素構造が $g$ と適合し、Bismut捩れは互いに逆符号になる。実Poissonテンソルは $\sigma=\frac12[I,J]g^{-1}$ である。両方のBismut Ricci形式が零ならGKBHEと呼ぶ。

共通の正規化ソリトンポテンシャル $f$ とLee形式から

$$
V\_I=\frac12(\theta\_I^\sharp-\operatorname{grad}f),\qquad
V\_J=\frac12(\theta\_J^\sharp-\operatorname{grad}f)
$$

が得られる。非Kählerの場合、$V\_I,IV\_I$ が張る葉層を $\mathcal F\_I$、その直交補空間を $\mathcal H$ とし、水平階数を

$$
r=\max\_{p\in M}\dim\_{\mathbb R}\operatorname{span}
\lbrace \pi\_{\mathcal H}V\_J(p),\pi\_{\mathcal H}JV\_J(p)\rbrace \in\lbrace 0,1,2\rbrace
$$

で定める。Kählerの場合は $r=0$ とする。

## 主結果

### 低い水平階数の構造（Theorem 1.1）

コンパクト連結GKBHE多様体で $r=0$ なら、$(I,g)$ と $(J,g)$ はともにRicci平坦Kählerである。$r=1$ なら $V\_J=cV\_I$、$c\in\lbrace \pm1\rbrace $ となり、$V\_I$ はLevi-Civita接続に関して平行である。

$Q$ を $V\_I^\perp$ に関する反射とすると、$(I,-QJQ,g)$ もGKBHEで、対応する符号は $c$ から $-c$ へ反転する。三次元で二つの複素構造の向きをそろえた場合、$c=1$ ではPoissonテンソルが零、$c=-1$ では稠密開集合上で階数四となる。同じ計量でもPoisson幾何が異なる対が現れる。

### 横断Ricci–Hamiltonian方程式（Theorem 1.2）

複素三次元で $r=1$、$V\_J=cV\_I$、$|V\_I|=1$ とする。横断Kähler計量を $g\_K$ とすると、基本関数

$$
F=e^{-f}\bigl(1+c\thinspace g(IV\_I,JV\_J)\bigr)\geq0
$$

は稠密開集合で正であり、

$$
I\operatorname{grad}\_{g\_K}F\text{ は正則},\qquad
\rho\_K=-dd^c\log F\quad\text{on }\lbrace F>0\rbrace
$$

を満たす。さらにこの正則ベクトル場は $JV\_J$ の水平部分の定数倍である。この式は $F$ が正則Killing場のHamiltonianであると同時に、その対数がRicci形式を決めることを表す。

### 横断データからの逆構成（Theorem 1.3）

$(S,g\_K)$ を正のスカラー曲率 $R\_K>0$ をもつコンパクト連結Kähler orbifold曲面とする。滑らかな関数 $F\geq0$、$F\not\equiv0$ が上の方程式を満たし、滑らかな全空間をもつ主 $T^2$-orbibundle $M\to S$ に接続形式 $\eta,\eta\_I$ があって

$$
d\eta=0,\qquad d\eta\_I=-\frac12\rho\_K
$$

とする。このとき各 $c=\pm1$ に対し、$M$ 上に水平階数一のGKBHE構造 $(I,J\_c,g)$ が存在し、$V\_{J\_c}=cV\_I$ となる。トーラス束と指定曲率の接続の存在は定理の仮定であり、任意の曲面から無条件に構成できるとは述べていない。

## 証明の見取り図

従来のBHE三次元の構成では横断曲面が満たす四階のBox方程式

$$
\frac12dd^cR\_K\wedge\omega\_K=\rho\_K\wedge\rho\_K+4\alpha\wedge\alpha
$$

が現れる。本稿の階数一では $\alpha=0$ となり、より低階のRicci–Hamiltonian系がこの式を含意する。正スカラー曲率の下で既知のBHE逆構成を使い、第二の複素構造を追加するのが新しい段階である。

まず $\lbrace F>0\rbrace $ 上で標準形から $J\_c$ を定め、$c=1$ ではKähler葉をもつ直交可積分分解から可積分性と捩れの符号を確認する。$c=-1$ は反射の対合で得られる。最後にRicciポテンシャルの恒等式を用いて見かけの特異性を除去し、$F=0$ を越えて延長する。Introductionが挙げる特定の位相型の新例はforthcoming workとして記されており、本稿ですべて完成した例の分類とは区別する。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2610.30130)
- **Introduction:** [PDF](https://arxiv.org/pdf/2610.30130v1) — Section 1, pp. 1–3
- **Introduction中で言及された主要結果:** Theorems 1.1, 1.2, 1.3
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2610.30130v1
- **確認したライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)
- **source\_scope:** Abstract and Introduction
