---
layout: paper
title: On rational curves relative to a divisor
title_ja: 因子に高々一点で接する有理曲線とCampana軌道体
authors: Jiun-Cheng Chen, Hsian-Hua Tseng
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: Let $X$ be a smooth complex projective variety and $D$ a reduced simple normal crossings divisor. We prove that, given a complete curve of negative $(K_X+D)$-degree, through its general points there is a rational curve whose normalization meets $D$ in at most one point. The proof uses ordinary weighted jets of a smooth family constructed from $(X,D)$, a positive parameter line bundle, and an intersection calculation on a ruled surface. We obtain an explicit degree bound depending on a projective embedding. We apply this construction to a cyclic cover compactification associated with a smooth Campana orbifold $(X,\sum_i(1-1/m_i)D_i)$. If its anticanonical divisor is big, we show that there is a covering family of free divisible Campana rational curves with fixed numerical class and contact data. In Picard number one case, the orbifold is Campana rationally connected.
topic: algebraic-geometry
tags:
- birational-geometry
- fano-varieties
- positivity
- singularities
arxiv_id: 2611.05809v1
arxiv_url: https://arxiv.org/abs/2611.05809
arxiv_submitted: '2026-11-04'
arxiv_updated: '2026-11-04'
summary: 対数標準因子と負に交わる完備曲線から、境界と正規化上で高々一点で交わる有理曲線を構成する。反対数標準因子がbigな滑らかなCampana軌道体への応用として、接触次数の可除性を保つ自由有理曲線族を得る。
abstract_en: ''
summary_en: The paper asks how negativity of a logarithmic canonical divisor produces rational curves with controlled boundary contacts. Its construction encodes the boundary in an ordinary smooth family before using weighted jets. An orbifold application then imposes divisibility on the contact orders through an auxiliary cover and a reparametrization. Rational connectedness is obtained under a Picard-number-one assumption, while the higher-rank case is left for future work.
abstract_ja: 滑らかな複素射影多様体と被約単純正規交叉因子の対について、対数標準次数が負の完備曲線の一般点を通り、正規化上で境界と高々一点で交わる有理曲線の存在を示す。証明には対から作る通常の滑らかな族の重み付きジェットと線織曲面上の交点計算を用いる。滑らかなCampana軌道体で反対数標準因子がbigなら、数値類と接触データを固定した自由で可除なCampana有理曲線の被覆族を得る。Picard数1ではCampana有理連結性も従う。
abstract_source_url: https://arxiv.org/abs/2611.05809
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2611.05809v1](https://arxiv.org/abs/2611.05809)
- **著者:** Jiun-Cheng Chen, Hsian-Hua Tseng
- **初回投稿日:** 2026-11-04
- **最終更新日:** 2026-11-04
- **主分類・副分類:** math.AG（主分類）; 副分類なし
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

通常のbend-and-breakは、標準因子の負性から有理曲線を生み出す。しかし境界因子を持つ対では、有理曲線の存在に加えて、その曲線が境界と何点で交わるかを制御する必要がある。

本論文は、負の対数標準次数を持つ完備曲線の一般点を通る有理曲線を、正規化上で境界と高々一点しか交わらないように構成する。著者らはこれをKeel–McKernanのlog bend-and-break予想の解決として位置づける。

さらに、境界への接触次数を整数で制約するCampana軌道体に応用する。反対数標準因子のbig性から、固定した接触データを持つ自由な曲線の被覆族を得る。Picard数1なら二点を結ぶ族へ進むが、高いPicard数での有理連結性まで本論文で解決したとは述べていない。

## 背景と問題設定

$X$を滑らかな複素射影多様体、$D=\sum\_iD\_i$を被約SNC因子とする。境界との交点は、像の曲線上で数えるだけでなく、その正規化$\nu:\mathbb P^1\to X$上で$\nu^\ast D$の台を数える。これにより、同じ境界点への異なる枝も区別される。

## 主結果

### 境界との接触を制御する有理曲線（Theorem 1.1）

$D$に含まれない整完備曲線$C\subset X$が

$$
(K\_X+D)\cdot C<0
$$

を満たすとする。このとき$C\setminus D$の稠密開集合の各点を通る、$D$に含まれない有理曲線$R$があり、その正規化は

$$
\operatorname{card}\operatorname{Supp}(\nu^\ast D)\leq1
$$

を満たす。単に有理曲線を作るだけでなく、境界接触を一箇所へ集中させることが主眼である。射影埋め込みに依存する次数上界もProposition 5.2で与えるとIntroductionは述べるが、ここには具体式がないため補わない。

### 商特異点を持つ曲面への応用（Proposition 1.2, Corollary 1.3）

$S$を商特異点を持つ正規射影曲面、$D$を被約有効Weil因子とし、ある豊富なCartier因子$H$に対して$(K\_S+D)\cdot H<0$とする。任意の有限集合$V$について、支配的な有理曲線族を

$$
\operatorname{card}\nu\_R^{-1}(D\cup\operatorname{Sing}(S)\cup V)\leq1
$$

となるように取れる。さらに対が特異点でpltなら、曲線を$S^{\mathrm{sm}}$内に取り、$V\setminus D$を避けさせられる。反対数標準因子が豊富ならこの条件を満たし、Picard数への制約は不要である。ただし滑らかな部分に全曲線を置く強化にはplt仮定が必要で、Introductionは重み付き射影平面の反例で説明する。

### 自由なCampana曲線（Theorem 1.7）

正整数$m\_i$に対し

$$
D\_\epsilon=\sum\_i\left(1-\frac1{m\_i}\right)D\_i,
\qquad H=-(K\_X+D\_\epsilon)
$$

と置く。$H$がbigなら、数値類と接触データを固定した自由で可除なCampana有理曲線の被覆族が存在する。nef性は要求しない。

Campana曲線とは非定数写像$g:\mathbb P^1\to X$で、像が$D$に含まれず、$g^\ast D\_i$の各係数$c\_{a,i}$が$0$または$m\_i$以上となるものをいう。可除性は$m\_i\mid c\_{a,i}$である。多重被覆を許すため、可除性は像の正規化だけでなく写像に属する条件である。ここで自由性は接触点を標識した対数的自由性を意味する。

### Picard数1での有理連結性（Corollary 1.8）

上の状況で$\rho(X)=1$なら、軌道体はCampana有理連結となる。すなわち二点評価が$X\times X$を支配する有限型のCampana有理曲線族が存在する。高いPicard数への拡張は今後の課題として明示される。

## 証明の見取り図

境界の各成分を記録する通常の滑らかな族を作り、与えられた曲線の正規化$f:B\to C$に沿う相対接束$E$について$\det E\simeq f^\ast \mathcal O\_X(-K\_X-D)$を得る。正の次数を重み付きジェットの交点計算に移し、正次数のパラメータ線束から多項式写像を構成する。線織曲面で境界の水平成分が無限遠に限られることが、一点接触の制御を与える。

Campanaの場合は巡回被覆を使う補助空間に持ち上げて同じ構成を適用し、最後に一点に残る接触の不整合を$\mathbb P^1$の自己写像で修正する。有限型の接触条件と複素数体の非可算性により点ごとの曲線を族へまとめ、評価写像の微分から自由性を得る。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2611.05809)
- **Introduction:** [PDF](https://arxiv.org/pdf/2611.05809v1) — Section 1, pp. 2–6（Abstractはp. 1）
- **Introduction中で言及された主要結果:** Theorem 1.1, Proposition 1.2, Corollary 1.3, Theorem 1.7, Corollary 1.8
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2611.05809v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
