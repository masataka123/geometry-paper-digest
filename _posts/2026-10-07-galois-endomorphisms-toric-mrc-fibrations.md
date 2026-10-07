---
layout: paper
title: Varieties Admitting Polarized Galois Endomorphisms
title_ja: Galois自己準同型をもつ多様体のトーリックなMRC構造
authors: Zhiyuan Jiang, Yujie Luo
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: |-
  Let $X$ be an $n$-dimensional smooth complex projective variety admitting an int-amplified Galois endomorphism. We prove that its maximal rationally connected fibration is represented by a smooth toric fibration over a smooth $Q$-abelian variety. Consequently, if $X$ is rationally connected, then it is toric. If it also has Picard number one, then $X\cong \mathbf{P}^n$. As another application, we prove that such $X$ is of log Calabi-Yau type as conjectured by Gongyo.
topic: algebraic-geometry
tags:
- toric-geometry
- birational-geometry
- fano-varieties
- calabi-yau-geometry
arxiv_id: 2610.05248v1
arxiv_url: https://arxiv.org/abs/2610.05248v1
arxiv_submitted: '2026-10-04'
arxiv_updated: '2026-10-04'
summary: |-
  滑らかな複素射影多様体がint-amplifiedなGalois自己準同型をもつとき、その最大有理連結ファイブレーションがトーリックな族になると示す。底は滑らかなQ-アーベル多様体で、有限エタール被覆後には主トーラス束による表示を得る。有理連結の場合のトーリック性や、Picard数1のFano多様体が射影空間になるという帰結を、Galois仮定の下で導く。
abstract_en: ''
summary_en: |-
  This work uses the Galois structure of a finite self-map to sharpen the geometry of smooth projective varieties with expanding divisor classes. The rationally connected part is organized into a smooth family of toric varieties, with a concrete bundle description after an étale cover of the base. In the rationally connected case this identifies the whole variety as toric. The introduction explains how reflection groups and Cox rings produce the toric structures and make them compatible throughout the family.
abstract_ja: |-
  int-amplifiedかつGaloisな自己準同型を備えた滑らかな複素射影多様体を調べる。その最大有理連結ファイブレーションを、滑らかなQ-アーベル多様体上の滑らかなトーリック・ファイブレーションとして記述する。したがって、有理連結なら多様体そのものがトーリックになり、さらにPicard数が1なら射影空間になる。また、有効境界を加えて対数Calabi–Yau対を作ることができる。Galois性を仮定しない一般の自己準同型に関する予想とは区別される。
abstract_source_url: https://arxiv.org/abs/2610.05248v1
license_name: arXiv non-exclusive distribution license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.05248v1](https://arxiv.org/abs/2610.05248v1)
- **著者:** Zhiyuan Jiang, Yujie Luo
- **初回投稿日:** 2026-10-04
- **最終更新日:** 2026-10-04
- **主分類・副分類:** math.AG（主分類）、副分類なし
- **ライセンス:** [arXiv non-exclusive distribution license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

射影多様体の非自明な自己準同型は、その幾何を強く制約する。特に、因子類を拡大する自己準同型をもつ有理連結多様体がトーリックになるか、Picard数1のFano多様体が射影空間になるかは、長く研究されてきた問題である。本論文は自己準同型にGalois性を加えてこれらに答える。

中心となる結果は、滑らかな複素射影多様体 $X$ の最大有理連結（MRC）ファイブレーションを、滑らかなQ-アーベル多様体 $C$ 上のトーリック・ファイブレーション $h:X\to C$ として実現することである。さらに有限エタール被覆後には、固定したトーリック多様体と主トーラス束から作る付随束として記述できる。

この構造から、有理連結な場合には $X$ 自体がトーリックであり、Picard数1のFanoの場合には $X\cong\mathbf P^n$ となる。また、対数Calabi–Yau境界の存在も導く。いずれも滑らかさとGalois性を含む定理であり、これらを外した一般の予想まで解決したと読むべきではない。

## 背景と問題設定

全射自己準同型 $f$ がint-amplifiedであるとは、ある豊富なCartier因子 $H$ に対して $f^\ast H-H$ が豊富になることである。$f^\ast H\sim qH$、$q>1$ を満たす偏極自己準同型はこの条件を満たす。Galois性は誘導される関数体拡大がGaloisであることを指す。

既存研究ではMRCの底のQ-アーベル性や、ファイバーの有理連結性・等次元性などが知られていた。ここでQ-アーベルとは、アーベル多様体から有限準エタール被覆を受けることをいう。本論文の新しさは、Galois構造を使ってファイバーのトーリック性を導き、それを族全体で整合的な構造へ高める点にある。反標準因子のnef性や、あらかじめ指定した不変境界の存在は仮定しない。

## 主結果

### 主定理1：MRCのトーリック構造（Theorem 1.1）

$X$ を滑らかな複素射影多様体、$f:X\to X$ をint-amplifiedなGalois自己準同型とする。このときMRCは、滑らかなQ-アーベル多様体 $C$ 上のトーリック・ファイブレーション $h:X\to C$ で表される。底には一意なint-amplifiedエタールGalois自己準同型 $f_C$ が存在し、

<div>
$$
h\circ f=f_C\circ h
$$
</div>

を満たす。$\operatorname{Gal}(f_C)$ はアーベル群であり、$f$ が $q$-偏極なら $f_C$ も $q$-偏極である。

相対トーリック境界を $D$ とすると、すべてのファイバー対は固定した滑らかな射影トーリック対 $(F,\partial F)$ と同型になる。$T=F\setminus\partial F$ とおけば、アーベル多様体からの連結有限エタールGalois被覆 $A\to C$ と主 $T$-束 $P\to A$ が存在し、

<div>
$$
(X\times_C A,D\times_C A)\cong
(P\times^T F,P\times^T\partial F)
$$
</div>

となる。この射影 $X\times_C A\to A$ はAlbanese射でもある。単に各ファイバーがトーリックだという結論より強く、トーリック構造を束として記述する定理である。Corollary 1.3は $X$ の有限エタールGalois被覆上でAlbanese射がsplit toric fibrationになることを述べる。

### 補助的構造定理：Galois性なしの滑らかさ（Proposition 1.2）

正規複素射影多様体がint-amplified自己準同型をもてば、Albanese射は全射かつ平坦で、幾何学的ファイバーは正規かつ整である。$X$ が滑らかな場合、Albanese射は滑らかであり、MRCも滑らかなQ-アーベル多様体上の滑らかな射影射で表される。この段階にはGalois性を必要としない。トーリック性を得る段階との仮定の違いが重要である。

### 主定理2：有理連結の場合（Theorem 1.4）

滑らかな射影有理連結多様体がint-amplifiedなGalois自己準同型をもつなら、$X$ はトーリック多様体であり、Cox環は多項式環になる（Theorem 1.4）。MRCの底が点になることによる帰結である。

### 主定理3：Picard数1のFano多様体（Theorem 1.5）

特に $n$ 次元の滑らかなFano多様体で $\rho(X)=1$ とし、次数が1より大きいGalois自己準同型が存在すれば、

<div>
$$
X\cong\mathbf P^n
$$
</div>

となる（Theorem 1.5）。これはIntroductionのfolklore予想をGalois仮定の下で解決するものである。論文は滑らかさを外せないことも明記する。

### 主定理4：対数Calabi–Yau型（Theorem 1.6）

滑らかな射影多様体 $X$ がint-amplifiedな有限Galois自己被覆をもつなら、ある因子 $D$ が存在して

<div>
$$
(X,D)\text{ はlog canonical},\qquad K_X+D\sim_{\mathbf Q}0
$$
</div>

となる。IntroductionはこれをGongyoの予想のGalois自己被覆の場合への回答として位置付ける。

## 証明の見取り図

まず自己準同型とAlbanese射の同変性を利用し、滑らかなファイバーの開集合の補集合が残らないことをMengの補題で示す。適切な有限エタール被覆上でAlbanese射とMRCを一致させ、その滑らかな構造を元の多様体へ降ろす。

次にAlbaneseの自己準同型の周期点上のファイバーを調べる。Galois性と反射群の不変式論によりCox環の関係式を引き戻しで比較し、int-amplified性が非零関係式に現れる単項式の最小次数を増大させることから矛盾を得る。こうしてCox環が多項式環となり、ファイバーのトーリック性が従う。周期点の稠密性と同変性を使い、局所自明性を底全体へ広げる。

族全体のトーリック構造には、さらにCox環の次数付けと生成元を貼り合わせる必要がある。イソジェニーによる基底変換でPicard群の有限モノドロミーと貼り合わせの障害を除き、反射群の固有空間から生成元に対応する直線束を得る。対角的な遷移関数が主トーラス束による表示を与える。

最後に被覆のGalois群とファイバー方向の作用の整合性を使って、座標因子の和としてのトーリック境界を $X$ へ降下させる。これはIntroductionの方針の要約であり、後続節のCox環の構成や降下の証明を新たに検証したものではない。

## 原論文との対応

- **確認箇所:** Abstract、Introduction（PDF 1–6頁、Section 2の前まで）。
- **主結果:** Theorems 1.1、1.4、1.5、1.6、Proposition 1.2、Corollary 1.3。
- **証明方針:** Introductionの「Outline of the proofs」に基づく。
- **確認ライセンス:** arXiv non-exclusive distribution license。
- **source_scope:** Abstract and Introduction。
