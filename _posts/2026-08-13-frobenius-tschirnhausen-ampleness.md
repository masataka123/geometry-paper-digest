---
layout: paper
title: "Frobenius--Tschirnhausen ampleness"
title_ja: "Frobenius–Tschirnhausen 束の豊富性"
authors: "Raymond Cheng, Emre Alp Özavcı"

arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
topic: algebraic-geometry
tags:
  - positivity
  - positive-characteristic
arxiv_id: "2608.11304v1"
arxiv_url: "https://arxiv.org/abs/2608.11304"
arxiv_submitted: "2026-08-11"
arxiv_updated: "2026-08-11"
summary: >-
  正標数の滑らかな射影多様体について、絶対 Frobenius の trace kernel が豊富になる条件とその幾何的帰結を調べる。この豊富性が非自明な射を許さない強い制約を課すことを示し、古典型および $G_2$ 型の Picard 数 1 の射影等質空間を低標数の明示的例外まで分類する。
abstract_en: >-
  We study smooth projective varieties whose Frobenius-trace kernel, also known as the Tschirnhausen bundle associated with the Frobenius morphism, is ample. We show that any non-constant morphism out of such a variety must be finite onto its image, providing strong evidence that these varieties must be Fano varieties of Picard rank 1. Using infinitesimal representation theory and by constructing special Frobenius splittings, we show that generalized Grassmannian of classical type and type $\mathrm{G}_2$ have ample Frobenius-trace kernel, with the exception of certain low characteristic examples which are explained by the existence of exotic isogenies of the associated algebraic groups.
summary_en: ""
abstract_ja: >-
  絶対 Frobenius 射に付随する Tschirnhausen 束、すなわち Frobenius trace の核が豊富である滑らかな射影多様体を研究する。このような多様体から出る非定数射は像の上で有限でなければならず、対象が Picard 数 1 の Fano 多様体に限られるという予想を強く支持する。さらに無限小表現論と特別な Frobenius 分裂の構成を用い、古典型および $\mathrm G_2$ 型の一般化 Grassmann 多様体では、exotic isogeny に由来する低標数の例外を除いて Frobenius trace kernel が豊富であることを示す。
abstract_source_url: "https://arxiv.org/abs/2608.11304"
license_name: "Creative Commons Attribution 4.0 International (CC BY 4.0)"
license_url: "https://creativecommons.org/licenses/by/4.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2608.11304](https://arxiv.org/abs/2608.11304)
- **著者:** Raymond Cheng, Emre Alp Özavcı
- **初回投稿日:** 2026年8月11日
- **最終更新日:** 2026年8月11日
- **主分類・副分類:** math.AG（主分類）
- **ライセンス:** [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)

## 要約

標数 $p>0$ の滑らかな射影多様体 $X$ では、絶対 Frobenius 射から Tschirnhausen 束 $E_X$ が得られる。このベクトル束の豊富性は、Frobenius と $X$ の正値性を直接結ぶ強い条件であり、第一 Chern 類の計算から少なくとも $X$ が Fano でなければならない。

本論文はまず、$E_X$ が豊富なら $X$ から出るすべての非定数射が像の上で有限になることを証明する。したがって半豊富因子は豊富であり、極端収縮も存在しない。収縮定理が使える場合には Picard 数が 1 となるので、「Frobenius–Tschirnhausen 豊富な多様体は Picard 数 1 の Fano 多様体である」という見通しに具体的な根拠を与える。

次に、低反標準次数の有理曲線や特別な超曲面から非豊富性の判定を導く一方、Picard 数 1 の射影有理等質空間を広く調べる。古典型および $G_2$ 型の一般化 Grassmann 多様体では、標数 2 または 3 に現れる明示的な例外を除いて豊富性が成立する。

証明では Frobenius–Tschirnhausen 束を直接分解するのではなく、特別な Frobenius 分裂と無限小表現論を用いる。例外の多くは対応する代数群の exotic isogeny によって説明され、正標数固有の現象が束の正値性を左右することが明確になる。

## 背景と問題設定

$k$ を標数 $p>0$ の代数閉体、$X$ を $n$ 次元滑らかな射影多様体とし、絶対 Frobenius を $F:X\to X$ とする。Frobenius cokernel とその双対は

$$
B_{X,e}:=\operatorname{coker}(\mathcal O_X\longrightarrow F_*^e\mathcal O_X),
\qquad E_{X,e}:=B_{X,e}^{\vee}
$$

で定義される。特に $E_X=E_{X,1}$ は Grothendieck 双対性により Frobenius trace kernel と同一視される。論文は $E_X$ が豊富な $X$ を Frobenius–Tschirnhausen ample と呼ぶ。

Grothendieck–Riemann–Roch による中心的な数値式は

$$
c_1(E_X)=\frac12p^{n-1}(p-1)c_1(T_X)
$$

である。従って $E_X$ の豊富性は $-K_X$ の豊富性を強制し、$X$ は Fano になる。ただし、Fano であることだけでは $E_X$ の豊富性を保証せず、どの Fano 多様体がこの強い条件を満たすかが主要問題となる。

## 主結果

### 射に対する剛性（Theorem A）

$X$ が滑らかで射影的かつ Frobenius–Tschirnhausen ample なら、任意の非定数射 $f:X\to Y$ は像の上で有限である。より技術的には、$X$ の任意の正次元連結閉部分スキームが Hironaka–Matsumura の $G1$ 性を満たし、形式的近傍の大域関数は定数だけになることから導かれる。

この結果により $X$ 上の半豊富因子はすべて豊富で、非自明な極端収縮は存在しない。Introduction では、$X$ に収縮定理が成り立つなら $\rho(X)=1$ という系が述べられている。

### Fano 超曲面の非豊富性（Theorem B）

$p<d\leq n$ のとき、標数 $p$ における $\mathbb P^n$ 内の次数 $d$ の滑らかな Fano 超曲面で、Frobenius–Tschirnhausen ample でないものが存在する。特別な $p$-profile をもつ明示的な超曲面族を使う結果で、$E_X$ の豊富性が Fano 性より真に強いことを示す。

### 一般化 Grassmann 多様体の分類（Theorem C）

Picard 数 1 の古典型または $G_2$ 型の射影有理等質空間 $X$ は、次の例外を除き Frobenius–Tschirnhausen ample である。

1. 標数 $2$ の $\operatorname{SGr}(k,2m)$（$2\leq k\leq m$）、
2. 標数 $2$ の $\operatorname{OGr}(m-1,2m+1)$、
3. 標数 $2$ または $3$ の $G_2$-Grassmann 多様体。

肯定的な場合には、Picard 群の負の生成元で捻った $E_X\otimes\mathcal O_X(-1)$ が大域生成されるという、豊富性より強い主張が証明される。例外では exotic isogeny や純非分離射が非豊富性を生む。

## 証明の見取り図

Theorem A では、$E_{X,e}$ の豊富性がすべての $e$ で同値であることと、閉部分スキームへの制限を調べる。$B_{X,e}=E_{X,e}^{\vee}$ の反豊富性から形式的近傍に非定数関数がないことを導き、形式関数定理を通じて正次元ファイバーを排除する。

非豊富性については、有理曲線上の $c_1(E_X)$ の次数と階数を比較し、さらに Frobenius 近傍の conormal bundle に由来するフィルトレーションを使う。等質空間の肯定的結果では、接束の正値性との関係を背景に、特別な Frobenius 分裂を無限小表現論によって構成し、$E_X(-1)$ の大域生成を示す。この記事では Introduction が提示する役割分担までをまとめ、各型の後続節の計算には立ち入っていない。

## 原論文との対応

- **Abstractページ:** [arXiv:2608.11304](https://arxiv.org/abs/2608.11304)
- **Introduction:** pp. 1–3（番号なしの Introduction）
- **Introduction中で言及された主要定理番号:** Theorems A, B, C
- **論文構成の説明:** pp. 1–3
- **確認したarXivバージョン:** v1
- **確認したライセンス:** CC BY 4.0
- **source_scope:** Abstract and Introduction
