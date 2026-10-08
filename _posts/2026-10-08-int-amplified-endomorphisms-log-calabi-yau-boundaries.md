---
layout: paper
title: Construction of log Calabi--Yau boundaries from int-amplified endomorphisms
title_ja: Int-amplified自己準同型からのlog Calabi–Yau境界の構成
authors: Shou Yoshikawa
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: |-
  In this paper, we prove that $\mathbb{Q}$-Gorenstein projective complex varieties admitting int-amplified endomorphisms are of Calabi--Yau type.
topic: algebraic-geometry
tags:
- calabi-yau-geometry
- singularities
- birational-geometry
- pluripotential-theory
arxiv_id: 2610.09437v1
arxiv_url: https://arxiv.org/abs/2610.09437v1
arxiv_submitted: '2026-10-07'
arxiv_updated: '2026-10-07'
summary: |-
  Int-amplified自己準同型を持つ正規射影多様体について、分岐と両立する境界をlog Calabi–Yau境界へ拡張する。Q-Gorensteinまたはklt typeの場合にCalabi–Yau type性が従い、偏極自己準同型の反復の分岐因子を正規化した対のlog canonical性も示す。
abstract_en: ''
summary_en: |-
  An expanding algebraic self-map can constrain the canonical divisor of its underlying variety. This paper constructs log Calabi–Yau boundaries that dominate an initial effective boundary compatible with ramification. It deduces Calabi–Yau type for normal projective varieties that are Q-Gorenstein or of klt type and admit an int-amplified endomorphism. The introduction links this construction to positive currents, invariant valuations, and equivariant birational models, and states a further result for normalized ramification divisors of polarized iterates.
abstract_ja: |-
  論文は、int-amplified自己準同型を持つQ-Gorensteinな複素射影多様体がCalabi–Yau typeであることを証明する。これは、有効な有理境界を加えてlog canonicalかつ対数標準因子が有理線形同値で0となる対を構成できる、という主張である。
abstract_source_url: https://arxiv.org/abs/2610.09437v1
license_name: arXiv non-exclusive distribution license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.09437v1](https://arxiv.org/abs/2610.09437v1)
- **著者:** Shou Yoshikawa
- **初回投稿日:** 2026-10-07
- **最終更新日:** 2026-10-07
- **主分類・副分類:** math.AG（主分類）、副分類なし
- **ライセンス:** [arXiv non-exclusive distribution license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

偏極自己準同型を持つ正規射影多様体は、適切な境界を加えるとlog Calabi–Yauになると予想されてきた。この論文は、偏極より広いint-amplified自己準同型を扱い、Q-Gorensteinまたはklt typeという条件の下でその結論を得る。

主定理は境界なしの場合だけではない。最初から有効境界$B$が与えられ、自己準同型の分岐と両立する条件を満たすなら、$B$以上の境界$\Theta$を構成して、$(X,\Theta)$をlog canonicalにし、$K_X+\Theta$を有理線形同値で0にする。

証明の背景には、分岐因子を反復して作る正のカレントと、その非klt部分の力学がある。解析的な境界を代数的な境界へ移すため、固有付値を取り出す同変双有理モデルとadjunctionを用いる。さらに、偏極自己準同型については、十分な反復の分岐因子そのものを正規化してlc対を得る結果も述べられる。

## 背景と問題設定

$X$を複素数体上の正規射影多様体とする。全射自己準同型$h:X\to X$がint-amplifiedであるとは、ある豊富なCartier因子$H$に対して$h^\ast H-H$が豊富になることである。$h^\ast H\sim qH$、$q>1$となる偏極自己準同型はその特別な場合にあたる。

$X$がCalabi–Yau typeであるとは、有効$\mathbb Q$-Weil因子$\Theta$が存在して

<div>
$$
(X,\Theta)\text{ が lc},\qquad K_X+\Theta\sim_{\mathbb Q}0
$$
</div>

となることである。境界の存在を述べる性質であり、$X$自身が滑らかなCalabi–Yau多様体になるという意味ではない。

## 主結果

### 境界を保った構成（Theorem 1.2）

$h$をint-amplifiedとし、有効$\mathbb Q$-Weil因子$B$について$K_X+B$が$\mathbb Q$-Cartierで、

<div>
$$
R_{h,B}:=R_h+B-h^\ast B\ge0
$$
</div>

と仮定する。$R_h$は$h$の分岐因子である。このとき有効$\mathbb Q$-Weil因子$\Theta\ge B$が存在して、$(X,\Theta)$はlc、$K_X+\Theta\sim_{\mathbb Q}0$となる。与えた境界を捨てずに、自己準同型に由来する情報で完成させる定理である。

### Calabi–Yau type性（Corollary 1.3）

Int-amplified自己準同型を持つ正規複素射影多様体$X$がQ-Gorenstein、またはklt typeなら、$X$はCalabi–Yau typeである。後者は、ある有効$\mathbb Q$-Weil因子$\Delta$に対して$(X,\Delta)$がkltとなることを意味する。

これはBroustet–Gongyoの偏極自己準同型に関する予想に対し、上記の仮定の下で肯定的な答えを与える。Introductionは、一般の正規多様体について仮定をすべて取り除いた結論とは区別する。

### 正規化した分岐因子（Theorem 1.4）

$X$が正規Q-Gorenstein複素射影多様体で、$f:X\to X$が$q$-偏極自己準同型なら、ある整数$r_0\ge1$が存在して、すべての整数$m\ge1$について

<div>
$$
\left(X,\frac{R_{f^{mr_0}}}{q^{mr_0}-1}\right)
\quad\text{が log canonical}
$$
</div>

となる。任意に境界を探すだけでなく、反復写像の分岐因子に由来する具体的な境界を制御する主張である。

## 証明の見取り図

Introductionは、まず偏極自己準同型で対数標準因子の数値類が固有方向にある場合を説明する。分岐因子の正規化された像の級数から閉正$(1,1)$カレントを構成し、それを$-(K_X+B)$の数値類を表す解析的log Calabi–Yau境界とみなす。その非klt locusは代数的で完全不変となる。

このカレントの非klt locusと元の対の非klt locusが一致する場合、十分な反復後にlc中心へ写像を制限し、次元帰納法とinversion of adjunctionによって代数的境界のlc性を得る。一致しない場合には、余分な成分を中心とする因子的固有付値を同変に取り出し、境界係数1の成分へ移す。

局所的な核心は、不変filtrationの閾値を計算する付値の中で体積最小化を行うことである。一意性から固有関係を得て、有理的な摂動によって因子的付値にする。以上はIntroductionで示された戦略であり、後続節の付値構成や解析的収束の証明をここで再現するものではない。

## 原論文との対応

- **Abstractページ:** [arXiv:2610.09437v1](https://arxiv.org/abs/2610.09437v1)
- **Introduction:** Section 1、pp. 1–4。
- **主結果:** Theorems 1.2・1.4、Corollary 1.3。Conjecture 1.1は背景となる予想。
- **論文構成:** 目次とIntroductionは、分岐級数、カレント、局所固有付値、同変モデル、adjunction、正規化分岐因子の順に議論を配置する。
- **確認バージョン:** v1。
- **確認ライセンス:** arXiv non-exclusive distribution license。
- **source_scope:** Abstract and Introduction。
