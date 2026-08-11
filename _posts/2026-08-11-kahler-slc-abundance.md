---
layout: paper
title: "Failure of the semi log canonical Abundance for compact Kähler threefolds"
title_ja: "コンパクトKähler三次元多様体におけるsemi-log-canonical abundanceの破綻"
authors: "Swapnajit Das"

arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
  - math.CV
topic: algebraic-geometry
arxiv_id: "2604.28085v1"
arxiv_url: "https://arxiv.org/abs/2604.28085"
arxiv_submitted: "2026-04-30"
arxiv_updated: "2026-04-30"
summary: >-
  射影的slc三次元多様体では成立するabundanceが、コンパクトKählerの場合には一般に破れることを反例で示す。一方、sdlt対ではnefな対数標準因子が半豊富であり、slc対でも各正規化成分の対数Kodaira次元が正なら同じ結論が成立する。
abstract_en: ""
summary_en: >-
  The paper examines abundance for compact Kähler threefolds with nonnormal singularities. It proves semiampleness of a nef log canonical divisor for semi-dlt pairs, while constructing an irreducible semi-log-canonical threefold whose nef canonical divisor has no sufficiently divisible pluricanonical sections. A further theorem recovers semiampleness for semi-log-canonical pairs when every normalized component has positive log Kodaira dimension. The contrast identifies a specifically nonprojective obstruction to extending the projective abundance theorem without additional assumptions.
abstract_ja: >-
  コンパクトKähler三次元多様体ではsemi-log-canonical abundanceが一般に成立しない。具体的には、正規化上の対数Kodaira次元が0で、$K_X$ がnefだが半豊富でない既約slc三次元多様体を構成する。他方、コンパクトKähler sdlt三次元対ではnefな $K_X+\Delta$ が半豊富である。さらにslc対でも、正規化の全成分で導来する対数標準因子のKodaira次元が正なら半豊富性が成立する。
abstract_source_url: "https://arxiv.org/abs/2604.28085v1"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2604.28085v1](https://arxiv.org/abs/2604.28085v1)
- **著者:** Swapnajit Das
- **初回投稿日:** 2026年4月30日
- **最終更新日:** 2026年4月30日（v1）
- **主分類・副分類:** math.AG（主分類）, math.CV
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Abundance予想は、標準因子がnefなら十分大きく割り切れる倍数が大域切断で生成される、すなわち半豊富になると期待する。射影三次元多様体では古典的に確立され、コンパクトKähler三次元の正規なlog canonical対でも近年成立した。非正規なsemi-log-canonical（slc）対まで拡張できるかが本稿の問題である。

射影的slc三次元対ではFujinoの定理が肯定解を与える。しかしKähler圏では、その証明の要である曲面のpluricanonical表現の有限性が非代数的K3曲面で破れる。本稿はこの差が単なる証明上の障害ではなく、実際の反例を生むことを示す。

一方、slcより成分の貼り合わせが制御されたsemi-divisorial-log-terminal（sdlt）対ではabundanceが成立する。Fujinoのadmissible/preadmissible切断を「minimal」な版に置き換え、Kähler曲面で利用可能な限定的有限性から大域生成を回復する。

一般のslc対でも、正規化の各成分で対数標準因子のKodaira次元が正なら半豊富性が成立する。したがって反例はKodaira次元0の貼り合わせに集中しており、成立定理と失敗例の境界を具体化している。

## 背景と問題設定

対 $(X,\Delta)$ のabundanceは

$$
K_X+\Delta\ \text{がnef}\quad\Longrightarrow\quad
\mathcal O_X\bigl(m(K_X+\Delta)\bigr)\ \text{が大域生成}
$$

が十分大きく割り切れる $m$ で成立することをいう。非正規なslc対では、正規化

$$
\mu:\bigsqcup_i(X_i',\Delta_i'+D_i')\longrightarrow(X,\Delta)
$$

の導手因子 $D_i'$ に沿ってpluricanonical切断を適切に貼り合わせる必要がある。

Fujinoの射影的証明は、dlt modificationの境界上でadmissible切断を作り、それをpreadmissible切断として持ち上げ、最後にslc対へ降下させる。コンパクトKähler曲面ではpluricanonical表現の有限性が一般には失敗するため、この手順をそのまま移植できない。

## 主結果

### sdlt対のabundance（Theorem 1.3）

$(X,\Delta)$ を三次元コンパクトKähler sdlt対とし、$K_X+\Delta$ がnefとする。このとき十分大きく割り切れる $m$ に対し

$$
\mathcal O_X\bigl(m(K_X+\Delta)\bigr)
$$

は大域生成である。つまりsdltという追加構造の下ではKähler圏でもabundanceが成立する。

### slc abundanceの反例（Theorem 1.4）

既約なコンパクトKähler slc三次元多様体 $X$ で、$K_X$ はnefだが半豊富でなく、十分大きく割り切れる全ての $m>0$ に対し

$$
H^0(X,mK_X)=0
$$

となるものが存在する。正規化 $\mu:X'\to X$ と導手 $D'$ に対しては

$$
K_{X'}+D'=\mu^*K_X,
\qquad \kappa(X',K_{X'}+D')=0
$$

である。従って射影的slc abundanceは、コンパクトKähler圏へ無条件には拡張できない。

### 正の対数Kodaira次元による回復（Theorem 1.5）

$(X,\Delta)$ を三次元コンパクトKähler slc対、$K_X+\Delta$ をnefとする。上の正規化の各成分で

$$
\kappa(K_{X_i'}+\Delta_i'+D_i')>0
$$

なら、十分大きく割り切れる $m$ に対して $\mathcal O_X(m(K_X+\Delta))$ は大域生成である。Introductionは、これにより反例型の現象が正の対数Kodaira次元では起きないと位置付ける。

## 証明の見取り図

sdltの場合は、正規化成分と導手の組合せを利用して「minimally admissible」「minimally preadmissible」切断を導入する。正のKodaira次元を持つKähler lc曲面について得られるpluricanonical表現の有限性を必要な成分だけに適用し、境界上の切断を持ち上げて $X$ に降下させる。

反例は、Kähler曲面でpluricanonical表現が有限にならない現象をslcの貼り合わせに組み込み、正規化上では自明化できるpluricanonical束の切断が導手上の同一視と両立しないようにする。Introductionが与える範囲では、この貼り合わせが全ての十分割り切れる次数の大域切断を消すことが核心である。

## 原論文との対応

- **Abstractページ:** [arXiv:2604.28085v1](https://arxiv.org/abs/2604.28085v1)
- **Introduction:** Section 1
- **Introduction中で言及された主要定理番号:** Theorems 1.3, 1.4, 1.5
- **論文構成の説明:** Section 1末尾
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
